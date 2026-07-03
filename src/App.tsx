import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

export default function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/neonReel" element={<MainPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}