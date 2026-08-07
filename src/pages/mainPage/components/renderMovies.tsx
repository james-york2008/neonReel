import type { Movie } from "../../../types/movie"
import star from "../../../assets/star.webp"
import styles from "../../../css/components/mainPage/movies.module.css"
import { Link } from "react-router-dom"


type Props = {
  movies: Movie[]
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export default function RenderMovies({ movies }: Props) {
  return(
    <div className={styles.movies}>
      {movies.map(movie => {
        if (movie) {
          const url= `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=${apiKey}`

          return (
            <Link to={`/neonReel/movies/${movie.id}`} key={movie.id} className={styles.movieLink}>
              <article className={styles.movie}>
                <img className={styles.moviePicture} src={url} aria-hidden="true" lazy-loading="true" decoding="async" />

                <div className={styles.movieContent}>
                  <h3>{movie.title}</h3>
                  <p className={styles.movieYear}>{movie.release_date?.split("-")[0]}</p>
                  <img src={star} alt="" aria-hidden="true" className={styles.star} />
      
                  <p className={styles.voteAverage}>
                    <span className="screenReaderText">Star rating:</span>
                    {movie.vote_average.toFixed(1)}
                  </p>
                </div>
              </article>
            </Link>
          )
        } else {
          return(
            <p className={styles.errorText} key={undefined}>No movies found</p>
          )
        }
      })}
    </div>
  )
}