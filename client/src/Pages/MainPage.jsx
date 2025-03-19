import {v4 as uuidV4} from "uuid"
export default function MainPage() {

function CreateRoomId() {
  const id = uuidV4()
  console.log(id);
  
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white animate__animated animate__fadeIn">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl animate__animated animate__zoomIn animate__delay-1s">
        <img
          src="/src/assets/snippet_bash_log.png"
          alt="Snippet Bash Logo"
          className="w-2/3 mx-auto mb-6 animate__animated animate__bounceIn"
        />

        <label className="block text-lg font-semibold mb-2 text-gray-300 animate__animated animate__fadeInLeft animate__delay-2s">
          Enter Your Room ID
        </label>

        <input
          type="text"
          placeholder="Enter room ID"
          className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 mb-4 animate__animated animate__fadeInUp animate__delay-3s"
        />

        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 animate__animated animate__fadeInUp animate__delay-4s"
        />

        <button className="mt-6 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold animate__animated animate__pulse animate__infinite"
        >
          Get In
        </button>
      </div>
      
      <span className="mt-4 text-gray-400 animate__animated animate__fadeInUp animate__delay-5s">
        Don't Have an Invite Code? &nbsp;
        <a href="" className="text-blue-400 hover:text-blue-500 transition duration-300"
        onClick={(e)=>{
          e.preventDefault()
          CreateRoomId()
        }}>
          Create Room
        </a>
      </span>
    </div>
  );
}
