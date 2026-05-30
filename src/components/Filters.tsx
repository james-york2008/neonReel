export default function Filters () {
  return (
    <form id="filters">
      <div id="genreFiltersWrapper">
        <fieldset id="genreFilters" name="genreFilters">
          <legend className="sectionTitle">QUICK PICKS</legend>

          <label htmlFor="actionGenre">
            <input type="checkbox" id="actionGenre" value="28" />
            <p className="genre">Action</p>
          </label>

          <label htmlFor="comedyGenre">
            <input type="checkbox" id="comedyGenre" value="35" />
            <p className="genre">Comedy</p>
          </label>
          
          <label htmlFor="horrorGenre">
            <input type="checkbox" id="horrorGenre" value="27" />
            <p className="genre">Horror</p>
          </label>
          
          <label htmlFor="romanceGenre">
            <input type="checkbox" id="romanceGenre" value="10749" />
            <p className="genre">Romance</p>
          </label>
          
          <label htmlFor="dramaGenre">
            <input type="checkbox" id="dramaGenre" value="18" />
            <p className="genre">Drama</p>
          </label>
          
          <label htmlFor="scifiGenre">
            <input type="checkbox" id="scifiGenre" value="878" />
            <p className="genre">Sci-Fi</p>
          </label>
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