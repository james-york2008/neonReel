import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { fetchRecommendedMovies, searchMovies } from "./fetchMovies";

import Hero from "./hero/Hero";
import Filters from './filters/Filters'
import Movies from './movies/Movies'
import Random from './random/Random'
import Footer from './footer/Footer'

import heroImage from '../assets/heroImage.png'


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

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

  return (
    <>
      <div id="backgroundImageWrapper" style={{
      backgroundImage: `url(${heroImage})`}}>
        <Hero onSearch={handleSearch} />
        <Filters />
      </div>
    
      <Movies movies={movies} />
      <Random />
      <Footer />
    </>
  )
}
