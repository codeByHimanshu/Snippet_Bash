

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg animate__animated animate__fadeIn">
        <img
          src="/src/assets/snippet_bash_log.png"
          alt="Snippet Bash Logo"
          className="w-32 mx-auto mb-6 animate__animated animate__bounceIn"
        />
        
        <label className="block text-lg font-semibold mb-2 text-gray-300">
          Enter Your Room ID
        </label>
        
        <input
          type="text"
          placeholder="Enter room ID"
          className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 mb-4 animate__animated animate__fadeInUp"
        />

        <input
          type="text"
          placeholder="Confirm room ID"
          className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
}
