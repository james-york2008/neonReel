import type { Genre } from "../../../../types/genre"
import styles from "../../../../css/components/mainPage/filters.module.css"

type Props = {
  genre: Genre
  genreChange: (genre: number) => void
  selectedGenres: number[]
}

export default function Genres({ genre, genreChange, selectedGenres }: Props) {
  return(
    <label htmlFor={genre.genreLabel} className={styles.genreContainer}>
      <input 
        type="checkbox" 
        id={genre.genreLabel} 
        value={genre.id} 
        onChange={() => genreChange(genre.id)} 
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            genreChange(genre.id)
          }
        }}
        checked={selectedGenres.includes(genre.id) 
          ? true
          : false
        } 
      />

      <p className={styles.genre}>{genre.genreName}</p>
    </label>
  )
}