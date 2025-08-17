"use client";
import { useState } from "react";
import axios from "axios";

export default function AI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    const res = await axios.post("/api/ai", { prompt });
    setResponse(res.data.response);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>
      <textarea
        className="border w-full p-2 mb-2"
        placeholder="Ask a clinical question..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <button onClick={askAI} className="bg-green-500 text-white px-4 py-2 rounded">
        Ask
      </button>
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <b>Response:</b>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
