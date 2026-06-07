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

export async function handleGenres(selectedGenres: Array<number>): Promise<Movie[]> {
  let data

  try {
    const res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&with_genres=${selectedGenres}`)

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    data = await res.json()
  } catch (err) {
    console.error(err)
  }

  return data?.results ?? []
}

export async function handleYearFilter(fromYear: number | void, toYear: number | void): Promise<Movie[]> {
  let data

  try {
    let res
    if (!fromYear) { 
      res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&primary_release_date.lte=${toYear}-12-31`)
    } else if (!toYear) {
      res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&primary_release_date.gte=${fromYear}-01-01`)
    } else {
      res = await fetch(`${baseUrl}/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&primary_release_date.gte=${fromYear}-01-01&primary_release_date.lte=${toYear}-12-31`)
    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    if (!data) {
      data = await fetchRecommendedMovies()
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