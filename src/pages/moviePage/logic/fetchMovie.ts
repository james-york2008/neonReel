import type { Movie } from "../../../types/movie"

const baseUrl = "https://api.themoviedb.org/3"
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export async function fetchMovie (movieId: string): Promise<Movie> {
  let data
  const params = new URLSearchParams({ 
    api_key: apiKey
  })

  const url = `${baseUrl}/movie/${movieId}?${params}`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()    
  } catch (err) {
    console.error(err)
  }

  return data
}