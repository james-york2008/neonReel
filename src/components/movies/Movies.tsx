import type { Movie } from "../../types/movie"
import RenderMovies from "../renderMovies"

type Props = {
  movies: Movie[]
}

export default function Movies ({ movies }:Props) { 
  return (
    <div id="moviesWrapper">
      <h2 className="sectionTitle">TRENDING NOW</h2>
  
        <RenderMovies movies={movies}/>
    </div>
  )
}
  