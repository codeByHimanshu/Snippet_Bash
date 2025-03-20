import { Toaster } from "react-hot-toast";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnippetPage from "./Pages/SnippetPage";

function App() {
  return (
    <>
<Toaster
position="top-right" >
  
   </Toaster>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/snippet/:roomid" element={<SnippetPage />} />      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
