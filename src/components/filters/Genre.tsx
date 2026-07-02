import type { Genre } from "../../types/genre"

type Props = {
  genre: Genre
  genreChange: (genre: number) => void
  selectedGenres: number[]
}

export default function Genres({ genre, genreChange, selectedGenres }: Props) {
  return(
    <label htmlFor={genre.genreLabel} className="genreContainer">
      <input 
        type="checkbox" 
        id={genre.genreLabel} 
        value={genre.id} 
        onChange={() => genreChange(genre.id)} 
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            genreChange(genre.id)
          }
        }}
        checked={selectedGenres.includes(genre.id) 
          ? true
          : false
        } />

      <p className="genre">{genre.genreName}</p>
    </label>
  )
}