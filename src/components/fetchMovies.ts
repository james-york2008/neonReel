import type { Movie } from '../types/movie'

const baseUrl = 'https://api.themoviedb.org/3/'

export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`${baseUrl}/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
  const data = await res.json()

  return data.results
}