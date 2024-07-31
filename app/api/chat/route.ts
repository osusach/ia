import { createOpenAI, openai } from "@ai-sdk/openai";
import {
  convertToCoreMessages,
  embed,
  generateText,
  streamText,
  tool,
} from "ai";
import { getXataClient } from "@/lib/xata";
import { z } from "zod";
import { getAvailableScholarships } from "@/lib/getAvailableScholarships";

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

  const preResult = await generateText({
    model,
    messages,
    system: "Rellena información de un usuario",
    tools: {
      getUserProfile: tool({
        description:
          "Consigue información acerca de un usuario apartir de sus historial de conversaciones",
        parameters: z.object({
          name: z.string().describe("Nombre del usuario"),
          social_registry_percentage: z
            .number()
            .min(10)
            .max(100)
            .describe(
              'Porcentaje del registro social de hogares; ej.: decil o percentil 7 = 70. Otro ejemplo: "Estoy en el 60% más vulnerable = 60"'
            ),
          commune: z
            .string()
            .describe(
              "Comuna de Chile en la que vive el usuario. Esta no puede ser una ubicación de otro país."
            ),
        }),
        execute: async (values) => {
          return values;
        },
      }),
      getEligibleScholarships: tool({
        description:
          "Muestra las becas a las que podría postular el usuario, a partir de la información recolectada.",
        parameters: z.object({
          social_registry_percentage: z
            .number()
            .min(10)
            .max(100)
            .nullable()
            .describe(
              'Porcentaje del registro social de hogares; ej.: decil o percentil 7 = 70. Otro ejemplo: "Estoy en el 60% más vulnerable = 60". Si no lo sabes, el valor es null'
            ),
          highschool_average_score: z
            .number()
            .min(1)
            .max(7)
            .nullable()
            .describe(
              "Promedio de notas de enseñanza media del estudiante; Es un número flotante de un decimal, entre 1.0 y 7.0 inclusivo. Si no lo sabes, el valor es null"
            ),
          average_obligatory_exams_score: z
            .number()
            .min(150)
            .max(1000)
            .nullable()
            .describe(
              "Puntaje promedio de los exámenes de ingreso a la universidad en Chile. Es un número entero entre 150 y 1000. Si no lo sabes, el valor es null"
            ),
          top_ranking_percentage: z
            .number()
            .min(10)
            .max(100)
            .nullable()
            .describe(
              'Porcentaje del ranking de notas de la generación del estudiante; ej.: decil o percentil 7 = 70. Otro ejemplo: "Estoy en el 10% mejor de mi generación.". Si no lo sabes, el valor es null'
            ),
        }),
        execute: async (values) => {
          return getAvailableScholarships(
            values.social_registry_percentage,
            values.highschool_average_score,
            values.average_obligatory_exams_score,
            values.top_ranking_percentage
          );
        },
      }),
    },
    toolChoice: "required",
  });

  console.log(
    preResult.toolResults.find((t) => t.toolName === "getUserProfile")?.result
  );

  console.log(
    preResult.toolResults.find((t) => t.toolName === "getEligibleScholarships")?.args,
    preResult.toolResults.find((t) => t.toolName === "getEligibleScholarships")?.result.map(e => e.name)
  );

  const result = await streamText({
    model,
    messages,
    system,
  });
  return result.toAIStreamResponse();
}
