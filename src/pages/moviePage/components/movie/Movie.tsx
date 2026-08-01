import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchMovie } from "../../logic/fetchMovie"

import type { Movie } from "../../../../types/movie"

import star from "../../../../assets/star.webp"
import styles from "../../../../css/components/moviePage/moviePage.module.css"

type Props = {
  movieId: string
}

export default function Movie ({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadMovie = async () => {
      const movie = await fetchMovie(movieId)

      setMovie(movie)  
      setLoading(false)
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
        <h1>Movie not found!</h1>
        <Link to={'/neonReel'}>Return to home page</Link>
      </>
    )
  }

  console.log(movie)

  if (movie) {
    return (
      <>
        <div className={styles.moviePageMainContent}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} backdrop image`} className={styles.movieImage} />
          <div>
            <h1 className={styles.movieTitle}>{movie.title}</h1>
          
            <div className={`${styles.moviePageRow} ${styles.greyText}`}>
              <span className="screenReaderText">Released in</span>
              <p>{movie.release_date.split("-")[0]}</p>
              
              <span className="screenReaderText">Runtime</span>
              <p>{movie.runtime} min</p>

              <span className="screenReaderText">Status:</span>
              <p className={movie.status !== "Released" ? styles.movieStatusNotReleased : ""}>{movie.status}</p>
            </div>
  
            <div className={`${styles.moviePageRow} ${styles.greyText}`}>
              <div className={styles.starRatingContainer}>
                <span className="screenReaderText">Star rating</span>
                <p className={styles.starRating}>{movie.vote_average.toFixed(1)} / 10</p>
                <img src={star} alt="" aria-hidden="true" className={styles.starIcon} />
              </div>
            </div>
  
            <p className={styles.movieOverview}>{movie.overview}</p>
          </div>
        </div>
      </>
    ) 
  }
}