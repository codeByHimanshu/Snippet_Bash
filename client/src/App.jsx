import { Toaster } from "react-hot-toast";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
<Toaster
position="top-right" >
  
   </Toaster>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
