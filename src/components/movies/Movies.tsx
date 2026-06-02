import type { Movie } from "../../types/movie"
import RenderMovies from "../renderMovies"

export default function Movies ({ movies }: {
  movies: Movie[]
}) { 
  return (
    <div id="moviesWrapper">
      <h4 className="sectionTitle">TRENDING NOW</h4>
  
        <RenderMovies movies={movies}/>
    </div>
  )
}
  