import { useEffect, useState } from "react"
import { fetchMovie } from "../../logic/fetchMovie"

import type { Movie } from "../../../../types/movie"

type Props = {
  movieId: string
}

export default function Movie ({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  
  useEffect(() => {
    const loadMovie = async () => {
      const movie = await fetchMovie(movieId)
      setMovie(movie)  
    }

    loadMovie()
  }, [])

  return (
    <h1>{movie?.title}</h1>
  )
}