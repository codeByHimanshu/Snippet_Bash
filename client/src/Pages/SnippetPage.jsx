import { useState } from "react";
import LoggedUser from "../components/LoggedUser";

export default function SnippetPage() {
  const [user, setUser] = useState([
    { socketId: 1001, username: "Himanshu Singh" },
    { socketId: 2002, username: "Aman Khare" },
  ]);

  return (
    <div className="flex h-screen items-center bg-gray-900 p-4">
    
      <div className="w-1/10 flex flex-col items-start animate__animated animate__bounceIn min-h-full border-r-2 border-solid border-gray-50">
        <img
          src="/src/assets/snippet_bash_log.png"
          alt="Snippet Bash Logo"
          className="w-full max-w-[350px]"
        />

  
        <div>
          {user.map(({ socketId, username }) => (
            <LoggedUser key={socketId} username={username} />
          ))}
        </div>
      </div>

  
      <div className="w-9/10 p-6 bg-gray-900 shadow-lg rounded-lg animate__animated animate__fadeInRight h-full">
        <h1 className="text-2xl font-bold text-gray-800">Write your code here</h1>
      </div>
    </div>
  );
}
