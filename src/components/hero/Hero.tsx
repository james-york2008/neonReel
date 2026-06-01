import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

export default function Hero () {
  return (
    <div id="hero">
      <a href="index.html" id="logoWrapper"><img id="logo" src={logo} alt="Link to home page" loading="lazy" /></a>

      <h2 id="heroTitle"><span className="whiteText">FIND YOUR</span><br/>NEXT MOVIE</h2>
      <p id="heroSubtitle">Search by title, year, or explore suggestions to discover your next favorite movie.</p>

      <form id="search">
          <div id="searchWrapper">
              <img src={search} alt="" id="submitSearchViaImg" loading="lazy" />
              <input type="search" placeholder="Search movies by title or keyword" id="searchBar" />
          </div>
          <button id="submitSearch">Search</button>
      </form>
    </div>
  )
}