import { genres } from "../../data/genres"
import Genre from "./Genre"

export default function Filters () {
  return (
    <form id="filters">
      <div id="genreFiltersWrapper">
        <fieldset id="genreFilters" name="genreFilters">
          <legend className="sectionTitle">QUICK PICKS</legend>

          {genres.map(genre => (
            <Genre key={genre.id} genre={genre} />
          ))}
        </fieldset>
      </div>

      <fieldset id="yearFilter" name="yearFilter">
        <legend className="sectionTitle">SORT BY YEAR</legend>
        
        <div id="fromYearDiv">
          <label htmlFor="fromYear">From</label>
          <input type="number" id="fromYear" />
        </div>

        <div id="toYearDiv">
          <label htmlFor="toYear">To</label>
          <input type="number" id="toYear" />
        </div>
      </fieldset>    
    </form>
  )
}