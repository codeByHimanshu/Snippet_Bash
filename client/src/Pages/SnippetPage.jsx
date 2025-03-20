export default function SnippetPage() {
    return (
      <div className="flex h-screen items-center bg-gray-900 p-4">
    
        <div className="w-1/10 flex justify-center items-center animate__animated animate__bounceIn min-h-full border-r-2 border-solid border-gray-50">
          <img
            src="/src/assets/snippet_bash_log.png"
            alt="Snippet Bash Logo"
            className="w-full max-w-[150px]"
          />
        </div>
        
      
        <div className="w-9/10 p-6 bg-gray-900 shadow-lg rounded-lg animate__animated animate__fadeInRight h-full">
          <h1 className="text-2xl font-bold text-gray-800">Write your code here</h1>
        </div>
      </div>
    );
  }