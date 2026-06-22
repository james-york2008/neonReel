import type { Movie } from '../types/movie'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export async function fetchRecommendedMovies(): Promise<Movie[]> {
  let data

  try {
    const res = await fetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}`)
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()
  } catch(err) {
    console.error(err)
    return []
  }
  return data.results
}

export async function searchMovies(search: string): Promise<Movie[]> {  
  let data

  if (!search) {
    data = await fetchRecommendedMovies()
    return data
  }

  try {
    const res = await fetch(`${baseUrl}/search/movie?query=${search}&api_key=${apiKey}`)
   
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }
   
    data = await res.json()
  } catch (err) {
    console.error(err)
  }

  return data?.results ?? []
}

export async function handleFilters(selectedGenres: Array<number> | void, fromYear: number | void, toYear: number | void): Promise<Movie[]> {
  let data
  const params = new URLSearchParams({
    api_key: apiKey
  })

  if (selectedGenres) {
    params.append('with_genres', `${selectedGenres}`)
  }

  if (typeof fromYear === 'number' && fromYear.toString().length > 3) {
    params.append('primary_release_date.gte', `${fromYear}-01-01`)
  }

  if (typeof toYear === 'number' && toYear.toString().length > 3) {
    params.append('primary_release_date.lte', `${toYear}-12-31`)
  }

  let url = `https://api.themoviedb.org/3/discover/movie?${params}`
  
  try {
    let res = await fetch(`${url}`)

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()
  } catch (err) {
    console.error(err)
  }

  if (data.results.length < 1) {
    data.results = [undefined]
  }

  return data.results
}

export async function handleRandom(selectedGenres: Array<number> | void, fromYear: number | void, toYear: number | void): Promise<Movie[]> {
  let data
  const params = new URLSearchParams({
    api_key: apiKey
  })

  if (selectedGenres) {
    params.append('with_genres', `${selectedGenres}`)
  }

  if (typeof fromYear === 'number' && fromYear.toString().length > 3) {
    params.append('primary_release_date.gte', `${fromYear}-01-01`)
  }

  if (typeof toYear === 'number' && toYear.toString().length > 3) {
    params.append('primary_release_date.lte', `${toYear}-12-31`)
  }

  const url = `https://api.themoviedb.org/3/discover/movie?${params}`

  try {
    const  res = await fetch(`${url}`)

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()    
  } catch (err) {
    console.error(err)
  }


  let randomPage: number
    data?.total_pages <= 500 
      ? randomPage = Math.ceil(Math.random() * data.total_pages)
      : randomPage = Math.ceil(Math.random() * 500)

  try {
    const res = await fetch(`${url}&page=${randomPage}`)
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()    
  } catch (err) {
    console.error(err)
  }

  const randomMovie = [data.results[Math.floor(Math.random() * data.results.length)]]

  return randomMovie
}