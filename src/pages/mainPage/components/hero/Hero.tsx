import search from "../../../../assets/search.webp"
import styles from "../../../../css/components/mainPage/hero.module.css"

import { useState } from "react"

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
      <h1 className={styles.heroTitle}><span className={styles.whiteText}>FIND YOUR</span><br/>NEXT MOVIE</h1>
      <p className={styles.heroSubtitle}>Search by title, year, or explore suggestions to discover your next favorite movie.</p>


      <form className={styles.search} onSubmit={handleSearch}>
          <div className={styles.searchWrapper}>
              <img src={search} alt="" aria-hidden="true" loading="lazy" />
              <input 
                type="search" 
                placeholder="Search movies by title or keyword" 
                className={styles.searchBar} 
                value={searchTerm} 
                autoComplete="off" 
                aria-labelledby="submitSearch" 
                onChange={(event => {
                  setSearchTerm(event.target.value)
                })} 
              />
          </div>
          <button className={styles.submitSearch} role="submit">Search</button>
      </form>
    </div>
  )
}