import Navbar from "../../components/navbar/Navbar"
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
      <Movie movieId={movieId} />
    </>
  )
}