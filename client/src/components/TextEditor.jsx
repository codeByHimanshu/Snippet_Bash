import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const TextEditor = () => {
  const [code, setCode] = useState("// Start typing...");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let capturedOutput = [];
      const customConsole = { log: (...args) => capturedOutput.push(args.join(" ")) };

   
      const func = new Function("console", `"use strict"; ${code}`);
      func(customConsole);

      setOutput(capturedOutput.length ? capturedOutput.join("\n") : "No output");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md">
      <Editor
        height="600px"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="hc-black"
        onChange={(value) => setCode(value || "")}
      />
      <button onClick={runCode} className="mt-4 p-2 bg-green-500 rounded hover:bg-green-600">
        Run Code
      </button>
      <div className="mt-4 p-3 h-28 text-white bg-black rounded">
        <strong>Output:</strong>
        <pre className="mt-2">{output}</pre>
      </div>
    </div>
  );
};

export default TextEditor;
