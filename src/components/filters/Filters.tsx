import { genres } from "../../data/genres"
import Genre from "./Genre"

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
    <form id="filters">
      <div id="genreFiltersWrapper">
        <fieldset id="genreFilters" name="genreFilters">
          <legend className="sectionTitle">QUICK PICKS</legend>

          {genres.map(genre => (
            <Genre key={genre.id} genre={genre} genreChange={genreChange} selectedGenres={selectedGenres} />
          ))}
        </fieldset>
      </div>

      <fieldset id="yearFilter" name="yearFilter">
        <legend className="sectionTitle">SORT BY YEAR</legend>
        
        <div id="fromYearDiv">
          <label htmlFor="fromYear">From</label>
          <input type="number" id="fromYear" placeholder="Year" onChange={(event) => {
            setFromYear(+event.target.value)
            yearFilter(fromYear, toYear)
          }} />
        </div>

        <div id="toYearDiv">
          <label htmlFor="toYear">To</label>
          <input type="number" id="toYear" placeholder="Year" onChange={(event) => {
            setToYear(+event.target.value)
            yearFilter(fromYear, toYear)
          }} />
        </div>
      </fieldset>    
    </form>
  )
}