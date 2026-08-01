import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Movie from "./components/movie/Movie"
import ErrorPage from "../errorPage/ErrorPage"

import { useParams } from "react-router-dom"

export default function MoviePage() {
  const { movieId } = useParams<{ movieId: string }>()

  if (!movieId) {
    return (
      <ErrorPage />
    )
  }

  return(
    <>
      <Navbar />

      <main>
        <Movie movieId={movieId} />
      </main>
      
      <Footer />
    </>
  )
}