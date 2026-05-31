import { useEffect, useState } from "react"
import star from '../assets/star.png'
import type { Movie } from '../types/movie'

export default function Movies () {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
      const data = await res.json()
      setMovies(data.results)
    }

    fetchMovies()
  }, [])


  return (
    <div id="moviesWrapper">
      <h4 className="sectionTitle">TRENDING NOW</h4>
  
      <div id="movies">
        {movies.map(movie => (
          <article className="movie" key={movie.id} style={{
            background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
          }}>
            <h6>{movie.title}</h6>
            <p className="movieYear">{movie.release_date?.split('-')[0]}</p>
            <img src={star} alt="" className="star" />

            <p className="voteAverage">{movie.vote_average.toFixed(1)}</p>
          </article>
        ))}
      </div>
    </div>
  )
}