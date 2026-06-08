import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { fetchRecommendedMovies, searchMovies, handleFilters, handleRandom } from "./fetchMovies";

import Hero from "./hero/Hero";
import Filters from './filters/Filters'
import Movies from './movies/Movies'
import Random from './random/Random'
import Footer from './footer/Footer'

import heroImage from '../assets/heroImage.png'

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [fromYear, setFromYear] = useState<number>()
  const [toYear, setToYear] = useState<number>()

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

  async function yearFilter (fromYearNumber: number, toYearNumber: number) {
    setFromYear(fromYearNumber)
    setToYear(toYearNumber)
    const res = await handleFilters(selectedGenres, fromYearNumber, toYearNumber)
    setMovies(res)
  }

  async function randomMovie() {
    const res = await handleRandom()
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