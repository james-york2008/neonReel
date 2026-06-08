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

export async function handleFilters(selectedGenres: Array<number> | void, fromYear: number | void, toYear: number | void): Promise<Movie[]> {
  let data
  const params = new URLSearchParams({
    api_key: '2ef7e9ce6c4341359a76e1ac108b1af3'
  })

  if (selectedGenres) {
      params.append('with_genres', `${selectedGenres}`)
  }

  if (fromYear) {
      params.append('primary_release_date.gte', `${fromYear}-01-01`)
  }

  if (toYear) {
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

  return data?.results ?? []
}

export async function handleRandom(): Promise<Movie[]> {
  let data
  try {
    let res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)


    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()    
  } catch (err) {
    console.error(err)
  }


  let randomPage
    data?.total_pages <= 500 
        ? randomPage = Math.ceil(Math.random() * data.total_pages)
        : randomPage = Math.ceil(Math.random() * 500)

  try {
    let res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&page=${randomPage}`)
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()    
  } catch (err) {
    console.error(err)
  }

  let randomMovie = data.results[Math.floor(Math.random() * data.results.length)]

  return [randomMovie]
}