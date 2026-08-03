import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import MoviePage from "./pages/moviePage/MoviePage";
import ErrorPage from "./pages/errorPage/ErrorPage";

export default function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/neonReel/" element={<MainPage />} />

        <Route path="/neonReel/movies/:movieId" element={<MoviePage />} />

        <Route path="*" element={<ErrorPage>Page not found</ErrorPage>} />
      </Routes>
      
    </BrowserRouter>
  )
}