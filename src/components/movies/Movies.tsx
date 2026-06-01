import { useEffect, useState } from "react"
import type { Movie } from "../../types/movie"
import { fetchMovies } from "../fetchMovies"
import RenderMovies from "../renderMovies"

export default function Movies () {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function loadMovies() {
      const movies = await fetchMovies()
      setMovies(movies)
    }

    loadMovies()
  }, [])

  return (
    <div id="moviesWrapper">
      <h4 className="sectionTitle">TRENDING NOW</h4>
  
        <RenderMovies  movies={movies}/>
    </div>
  )
}