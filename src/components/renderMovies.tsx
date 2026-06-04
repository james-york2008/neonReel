import type { Movie } from '../types/movie'
import star from '../assets/star.png'

type Props = {
  movies: Movie[]
}

export default function RenderMovies({ movies }: Props) {
  return(
    <div id="movies">
      {movies.map(movie => (
        <article className="movie" key={movie.id} style={{
          background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3), black`,
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