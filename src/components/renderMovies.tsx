import type { Movie } from '../types/movie'
import star from '../assets/star.png'

type Props = {
  movies: Movie[]
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export default function RenderMovies({ movies }: Props) {
  return(
    <div id="movies">
      {movies.map(movie => (
        <article className="movie" key={movie.id} style={{
          background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=${apiKey}), black`,
        }}>
          <h6>{movie.title}</h6>
          <p className="movieYear">{movie.release_date?.split('-')[0]}</p>
          <img src={star} alt="" className="star" />

          <p className="voteAverage">{movie.vote_average.toFixed(1)}</p>
        </article>
      ))}
    </div>
  )
}