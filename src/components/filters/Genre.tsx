import type { Genre } from "../../types/genre"

type Props = {
  genre: Genre
}

export default function Genres({ genre }: Props) {
  return(
    <label htmlFor={genre.genreLabel}>
      <input type="checkbox" id={genre.genreLabel} value={genre.id} />
      <p className="genre">{genre.genreName}</p>
    </label>
  )
}