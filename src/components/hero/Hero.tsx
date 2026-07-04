import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Hero ({ onSearch }: { 
  onSearch: (query: string) => void
}) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSearch(event: React.FormEvent | React.MouseEvent) {
    event.preventDefault()
    onSearch(searchTerm)
  }
  
  return (
    <div id="hero">
      <Link to={'/neonReel'} id="logoWrapper"><img id="logo" src={logo} alt="Link to home page" /></Link>

      <h1 id="heroTitle"><span className="whiteText">FIND YOUR</span><br/>NEXT MOVIE</h1>
      <p id="heroSubtitle">Search by title, year, or explore suggestions to discover your next favorite movie.</p>


      <form id="search" onSubmit={handleSearch}>
          <div id="searchWrapper">
              <img src={search} alt="" aria-hidden="true" loading="lazy" id="submitSearchViaImg" />
              <input 
                type="search" 
                placeholder="Search movies by title or keyword" 
                id="searchBar" 
                value={searchTerm} 
                autoComplete="off" 
                aria-labelledby="submitSearch" 
                onChange={(event => {
                  setSearchTerm(event.target.value)
                })} 
              />
          </div>
          <button id="submitSearch" role="submit">Search</button>
      </form>
    </div>
  )
}