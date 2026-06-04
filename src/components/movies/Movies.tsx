import type { Movie } from "../../types/movie"
import RenderMovies from "../renderMovies"

type Props = {
  movies: Movie[]
}

export default function Movies ({ movies }:Props) { 
  return (
    <div id="moviesWrapper">
      <h4 className="sectionTitle">TRENDING NOW</h4>
  
        <RenderMovies movies={movies}/>
    </div>
  )
}
  