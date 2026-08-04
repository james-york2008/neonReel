import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import MovieElement from "./components/movie/Movie"
import ErrorPage from "../errorPage/ErrorPage"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovie } from "./logic/fetchMovie"

import type { Movie } from "../../types/movie"

export default function MoviePage() {
  const { movieId } = useParams<{ movieId: string }>()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadMovie = async () => {
      if (movieId) {
        const movie = await fetchMovie(movieId)

        setMovie(movie)  
        setLoading(false)  
      }
    }

    if (movieId) {
      loadMovie()
    }
  }, [movieId])
  
  if (loading) {
    return (
      <p>Loading</p>
    )
  }
  
  if (!movie && !loading) {
    return (
      <>
        <ErrorPage>Movie not found</ErrorPage>
      </>
    )
  }

  if (movieId) {
    return (
      <>
        <Navbar mainLink="moviePage" />

        <main id="moviePage">
          <MovieElement movie={movie} />
        </main>
        
        <Footer />
      </>
    )
  }
}