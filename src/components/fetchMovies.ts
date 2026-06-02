import type { Movie } from '../types/movie'

const baseUrl = 'https://api.themoviedb.org/3'

export async function fetchRecommendedMovies(): Promise<Movie[]> {
  let data

  try {
    const res = await fetch(`${baseUrl}/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
    
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
    const res = await fetch(`${baseUrl}/search/movie?query=${search}&api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
   
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }
   
    data = await res.json()
  } catch (err) {
    console.error(err)
  }

  return data?.results ?? []
}