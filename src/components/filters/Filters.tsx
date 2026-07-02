import { genres } from "../../data/genres"
import Genre from "./Genre"

type Props = {
  genreChange: (genre: number) => void
  yearFilter: Function
  selectedGenres: number[]
}

export default function Filters ({ genreChange, yearFilter, selectedGenres }: Props) { 
  let fromYearNumber: number
  let toYearNumber: number
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
            fromYearNumber = Number(event.target.value)
            yearFilter(fromYearNumber, toYearNumber)
          }} />
        </div>

        <div id="toYearDiv">
          <label htmlFor="toYear">To</label>
          <input type="number" id="toYear" placeholder="Year" onChange={(event) => {
            toYearNumber = Number(event.target.value)
            yearFilter(fromYearNumber, toYearNumber)
          }} />
        </div>
      </fieldset>    
    </form>
  )
}