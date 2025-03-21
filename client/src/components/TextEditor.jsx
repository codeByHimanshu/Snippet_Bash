import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const TextEditor = () => {
  const [code, setCode] = useState("// start typing");
  const [output, setOutput] = useState();

  const runCode = () => {
  
    try {

        const result = new Function(`return (${code})`)()
      
      
      const outputResult = result !== undefined ? result.toString() : "No output";
      setOutput(outputResult);
      
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md">
      <CodeMirror
        value={code}
        height="600px "
        theme={dracula}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
       <button
        onClick={runCode}
        className="mt-4 p-2 bg-green-500 rounded hover:bg-green-600"
      >
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
