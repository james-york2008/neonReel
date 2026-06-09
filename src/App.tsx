import { useEffect, useState, useCallback } from "react";
import type { Movie } from "./types/movie";
import { fetchRecommendedMovies, searchMovies, handleFilters, handleRandom } from "./components/fetchMovies";

import Hero from "./components/hero/Hero";
import Filters from './components/filters/Filters'
import Movies from './components/movies/Movies'
import Random from './components/random/Random'
import Footer from './components/footer/Footer'

import heroImage from './assets/heroImage.png'

export default function App() {  
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [fromYear, setFromYear] = useState<number>()
  const [toYear, setToYear] = useState<number>()
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null)

  useEffect(() => {
    async function loadMovies() {
      const res = await fetchRecommendedMovies()
      setMovies(res)
    }

    loadMovies()
  }, [])

  async function handleSearch(query: string) {
    const res = await searchMovies(query)
    setMovies(res)
  }

  async function genreChange (genre: number) {
    let updatedGenres
    if (selectedGenres.includes(genre)) {
      updatedGenres = selectedGenres.filter((item) => item !== genre)
    } else {
      updatedGenres = [...selectedGenres, genre]
    }
    setSelectedGenres(updatedGenres)

    const res = await handleFilters(updatedGenres, fromYear, toYear)
    setMovies(res)
  }

  const yearFilter = useCallback(
    async (fromYearNumber: number, toYearNumber: number) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
    
      setFromYear(fromYearNumber)
      setToYear(toYearNumber)
      
      const newTimeout = setTimeout(async () => {
        const res = await handleFilters(selectedGenres, fromYearNumber, toYearNumber)
        setMovies(res)    
      }, 300)

      setDebounceTimeout(newTimeout)
    }, [debounceTimeout]
  )  

  async function randomMovie() {
    const res = await handleRandom(selectedGenres, fromYear, toYear)
    setMovies(res)
  }

  return (
    <>
      <div id="backgroundImageWrapper" style={{
      backgroundImage: `url(${heroImage})`}}>
        <Hero onSearch={handleSearch} />
        <Filters genreChange={genreChange} yearFilter={yearFilter}/>
      </div>
    
      <Movies movies={movies} />
      <Random handleRandom={randomMovie} />
      <Footer />
    </>
  )
}