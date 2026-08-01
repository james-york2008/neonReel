import { genres } from "../../../../data/genres"
import Genre from "./Genre"
import styles from "../../../../css/components/mainPage/filters.module.css"

type Props = {
  genreChange: (genre: number) => void
  yearFilter: (fromYearNumber: number | undefined, toYearNumber: number | undefined) => Promise<void>
  fromYear: number | undefined
  setFromYear: (fromYear: number) => void
  toYear: number | undefined
  setToYear: (toYear: number) => void
  selectedGenres: number[]
}

export default function Filters ({ genreChange, yearFilter, selectedGenres, fromYear, setFromYear, toYear, setToYear }: Props) { 
  return (
    <form className={styles.filters}>
      <div className={styles.genreFiltersWrapper}>
        <fieldset className={styles.genreFilters} name="genreFilters">
          <legend className={`sectionTitle ${styles.sectionTitle}`}>QUICK PICKS</legend>

          {genres.map(genre => (
            <Genre key={genre.id} genre={genre} genreChange={genreChange} selectedGenres={selectedGenres} />
          ))}
        </fieldset>
      </div>

      <fieldset className={styles.yearFilter} name="yearFilter">
        <legend className="sectionTitle">SORT BY YEAR</legend>
        
        <div className={styles.fromYearDiv}>
          <label htmlFor="fromYear">From</label>
          <input type="number" className={styles.fromYear} placeholder="Year" onChange={(event) => {
            setFromYear(+event.target.value)
            yearFilter(+event.target.value, toYear)
          }} />
        </div>

        <div className={styles.toYearDiv}>
          <label htmlFor="toYear">To</label>
          <input type="number" className={styles.toYear} placeholder="Year" onChange={(event) => {
            setToYear(+event.target.value)
            yearFilter(fromYear, +event.target.value)
          }} />
        </div>
      </fieldset>    
    </form>
  )
}