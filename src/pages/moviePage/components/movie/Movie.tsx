import type { Movie } from "../../../../types/movie"

import star from "../../../../assets/star.webp"
import styles from "../../../../css/components/moviePage/moviePage.module.css"

type Props = {
  movie: Movie | null
}

export default function MovieElement ({ movie }: Props) {

  if (movie) {
    console.log(movie)
    return (
      <>
        <div className={styles.moviePageMainContent}>
          <div className={styles.mainMovieWrapper}>
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
                  <p>({movie.vote_count.toLocaleString()})</p>
                  <span className="screenReaderText">Votes</span>
                </div>
              </div>
    
              <p className={styles.movieOverview}>{movie.overview}</p>
            </div>
          </div>  
          <p className={styles.tagline}>{movie.tagline}</p>
        </div>
      </>
    ) 
  }
}