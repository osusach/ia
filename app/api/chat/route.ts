import { createOpenAI, openai } from "@ai-sdk/openai";
import { convertToCoreMessages, embed, streamText, tool } from "ai";
import { getXataClient } from "@/lib/xata";
import { z } from "zod";

// const getScholarshipInformation = tool({
//   description:
//     "Consigue informacion acerca de becas/cupos que pueda usar el usuario, tienes informacion de la universidad de santiago de chile (USACH) y a nivel pais del ministerio de educacion (mineduc).",
//   parameters: z.array(
//     z.object({
//       name: z.string().describe("Nombre del cupo/beca"),
//       description: z.string().describe("Descripcion del cupo/beca"),
//     })
//   ),
// });

function createSystemPrompt({ context }: { context: String[] }) {
  const prompt = [
    "Eres un asistente para estudiantes con aspiracion de entrar a la universidad en Chile.",
    "La información del contexto es la siguiente.",
    "---------------------",
    context.join("\n"),
    "---------------------",
    "Dada la información del contexto y sin conocimientos previos, responde a la consulta.",
    "No des tu opinión personal.",
    "Responde de manera concisa.",
    "Asume que las personas que preguntan son Chilenas.",
  ].join("");

  return prompt;
}

async function generateEmbedding(value: string) {
  const model = openai.embedding("text-embedding-3-small");
  const { embedding } = await embed({
    model,
    value,
  });
  return embedding;
}

type Message = {
  role: string;
  content: string;
};

export async function POST(req: Request) {
  const body = await req.json();
  const messages = convertToCoreMessages(body.messages);
  const lastMessage = body.messages[body.messages.length - 1];

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    compatibility: "strict",
  });
  const model = openai("gpt-4o-mini");

  const xata = getXataClient();
  const records = await xata.db.scholarships.vectorSearch(
    "embedding",
    await generateEmbedding(lastMessage.content),
    { size: 6 }
  );
  const context = records.records
    .map((r) => r.content)
    .filter((c) => typeof c === "string");

  const system = createSystemPrompt({
    context,
  });

  const result = await streamText({
    model,
    messages,
    system,
    tools: {},
  });
  return result.toAIStreamResponse();
}

export async function GET(req: Request) {
  // const body = await req.json();

  const xata = getXataClient();
  const records = await xata.db.scholarships.vectorSearch(
    "embedding",
    await generateEmbedding("pascuense"),
    { size: 1 }
  );

  return new Response(
    JSON.stringify({
      success: true,
      records,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
