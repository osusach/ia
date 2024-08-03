"use client";

import { useState } from "react";
import { ClientMessage } from "./actions";
import { useActions, useUIState } from "ai/rsc";
import { generateId } from "ai";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();

  async function handleSendMessage() {
    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      { id: generateId(), role: "user", display: input },
    ]);

    const message = await continueConversation(input);

    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      message,
    ]);
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div>
        {conversation.map((message: ClientMessage) => (
          <div className="whitespace-pre-wrap" key={message.id}>
            {message.role}: {message.display}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
          setInput("");
        }}
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 flex justify-center border border-zinc-300 bg-zinc-100 rounded"
      >
        <textarea
          rows={1.5}
          style={{
            resize: "none",
            scrollPaddingBlock: "8px",
          }}
          value={input}
          className="bg-transparent border-none outline-none w-full"
          placeholder="Escribe algo..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-amber-500 relative text-white rounded-full h-10 w-10 shrink-0"
        >
          <span className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-full">
            <ArrowUpIcon className="h-6 w-6" />
          </span>
        </button>
      </form>
    </div>
  );
}
