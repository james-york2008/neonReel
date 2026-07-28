import { useEffect, useState } from "react"
import { fetchMovie } from "../../logic/fetchMovie"

import type { Movie } from "../../../../types/movie"

import star from '../../../../assets/star.webp'

type Props = {
  movieId: string
}

export default function Movie ({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  
  useEffect(() => {
    const loadMovie = async () => {
      const movie = await fetchMovie(movieId)
      setMovie(movie)  
      console.log(movie)
    }

    if (movieId) {
      loadMovie()
    }
  }, [])

  return (
    <>
      <div className="moviePageMainContent">
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={`${movie?.title} backdrop image`} />
        <h1>{movie?.title}</h1>
      
        <div className="moviePageRow">
          <p className="moviePageYear">{movie?.release_date?.split("-")[0]}</p>
          <p className="movieLength">{movie?.runtime}</p>
          <p className="movieStatus">{movie?.status}</p>
        </div>

        <div className="moviePageRow">
          <p className="starRating">{movie?.vote_average} / 10</p>
          <img src={star} alt="" aria-hidden="true" />
        </div>

        <p className="movieOverview">{movie?.overview}</p>
      </div>
    </>
  )
}