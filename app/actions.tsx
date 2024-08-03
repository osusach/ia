/* eslint-disable @next/next/no-img-element */
"use server";

import { getXataClient } from "@/lib/xata";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { embed, generateId } from "ai";
import {
  createAI,
  createStreamableValue,
  getMutableAIState,
  streamUI,
} from "ai/rsc";
import { ReactNode } from "react";
import { z } from "zod";

function LoadingComponent() {
  return (
    <div className="bg-stone-100 grid p-2 border text-black gap-1 rounded-md animate-pulse">
      <div>
        <div className="w-36 h-5 bg-stone-200 rounded-lg inline-block"></div>
        <div className="w-16 h-4 ml-1 bg-stone-200 rounded-lg inline-block"></div>
      </div>
      <div className="space-y-1">
        <div className="w-[78%] h-4 bg-stone-200 rounded-lg"></div>
        <div className="w-[92%] h-4 bg-stone-200 rounded-lg"></div>
        <div className="w-[67%] h-4 bg-stone-200 rounded-lg"></div>
      </div>
      <div className="flex gap-0.5 mt-1 justify-start items-center">
        <div className="w-6 h-6 bg-stone-200 rounded-full inline-block"></div>
        <div className="w-36 h-5 ml-1 bg-stone-200 rounded-lg inline-block"></div>
      </div>
    </div>
  );
}

function Scholarship(props: {
  name: string;
  description: string;
  type: "complementary" | "tuition";
}) {
  const type =
    props.type === "complementary" ? "Complementaria" : "Arancelaria";
  return (
    <div className="bg-stone-100 grid p-2 border text-black gap-1 rounded-md">
      <p>
        <strong>{props.name}</strong> <small>({type})</small>
        <br />
        <span>{props.description}</span>
      </p>
      <div className="flex gap-1 justify-start items-center">
        <img
          style={{
            // mixBlendMode: "color-burn",
            filter: "grayscale(100%)",
          }}
          className="object-contain w-6 h-6 inline-block mr-1"
          src="/usach.png"
          alt="Universidad de Santiago de Chile"
        />
        <p className="text-stone-500">Universidad de Santiago de Chile</p>
      </div>
    </div>
  );
}

async function generateEmbedding(value: string) {
  const model = openai.embedding("text-embedding-3-small");
  const { embedding } = await embed({
    model,
    value,
  });
  return embedding;
}

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

export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
};

export async function continueConversation(
  input: string
): Promise<ClientMessage> {
  "use server";
  const history = getMutableAIState();
  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    compatibility: "strict",
  });
  const model = openai("gpt-4o-mini");

  const xata = getXataClient();
  const records = await xata.db.scholarships.vectorSearch(
    "embedding",
    await generateEmbedding(input),
    { size: 6 }
  );
  const context = records.records
    .map((r) => r.content)
    .filter((c) => typeof c === "string");
  const system = createSystemPrompt({
    context,
  });
  const result = await streamUI({
    model,
    system,
    messages: [...history.get(), { role: "user", content: input }],
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          { role: "assistant", content },
        ]);
      }
      return <div>{content}</div>;
    },
    tools: {
      getScholarships: {
        description:
          "Consigue todas las becas que pueda usar el usuario, tienes informacion de la universidad de santiago de chile (USACH).",
        parameters: z.object({
          scholarships: z.array(
            z.object({
              name: z.string().describe("Nombre de la beca"),
              type: z
                .enum(["complementary", "tuition"])
                .describe(
                  'Tipo de beca, "tuition" se refiere a la beca de toda beca que cubra arancel, de lo contrario es "complementary"'
                ),
              description: z.string().describe("Descripción de la beca"),
            })
          ),
        }),
        generate: async function* ({ scholarships }) {
          yield <LoadingComponent />;
          return scholarships.map((scholarship, index) => (
            <Scholarship key={index} {...scholarship} />
          ));
        },
      },
    },
    toolChoice: "auto",
  });
  return {
    id: generateId(),
    role: "assistant",
    display: result.value,
  };
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
