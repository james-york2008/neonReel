import type { Genre } from "../../types/genre"

type Props = {
  genre: Genre
  genreChange: (genre: number) => void
}

export default function Genres({ genre, genreChange }: Props) {
  return(
    <label htmlFor={genre.genreLabel}>
      <input type="checkbox" id={genre.genreLabel} value={genre.id} onChange={() => genreChange(genre.id)} />
      <p className="genre">{genre.genreName}</p>
    </label>
  )
}