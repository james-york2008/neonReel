let fetchRecommendedMovies = async () => {
    const res = await  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }
    const data = await res.json()
    return data.results
}

let getSelectedGenres = () => {
    return Array.from(
        document.querySelectorAll(
            '#genreFilters input[type="checkbox"]:checked'
        )
    ).map(cb => cb.value)
}

let handleRandom = async () => {
    const randomPage = Math.floor(Math.random() * 500) + 1

    const selectedGenres = getSelectedGenres().join(',')
    let fromYear = document.getElementById('fromYear').value
    let toYear = document.getElementById('toYear').value

    const params = new URLSearchParams({
        api_key: '2ef7e9ce6c4341359a76e1ac108b1af3'
    })

    if (selectedGenres) {
        params.append('with_genres', selectedGenres)
    }

    if (fromYear) {
        params.append('primary_release_date.gte', `${fromYear}-01-01`)
    }

    if (toYear) {
        params.append('primary_release_date.lte', `${toYear}-12-31`)
    }

    let url = `https://api.themoviedb.org/3/discover/movie?${params}&page=${randomPage}`
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }

    const data = await res.json()
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]

    return randomMovie
}

let checkFilters = async () => {
    const searchBar = document.getElementById('searchBar')
    let value = searchBar.value
    const selectedGenres = getSelectedGenres().join(',')
    let fromYear = document.getElementById('fromYear').value
    let toYear = document.getElementById('toYear').value

    const params = new URLSearchParams({
        api_key: '2ef7e9ce6c4341359a76e1ac108b1af3'
    })

    if (selectedGenres) {
        params.append('with_genres', selectedGenres)
    }

    if (fromYear) {
        params.append('primary_release_date.gte', `${fromYear}-01-01`)
    }

    if (toYear) {
        params.append('primary_release_date.lte', `${toYear}-12-31`)
    }

    let url

    let genreFilters = document.getElementById('genreFilters')
    let yearFilters = document.getElementById('yearFilter')

    if (value) {
        params.append('query', value)
        params.delete('with_genres')
        params.delete('primary_release_date.gte')
        params.delete('primary_release_date.lte')

        genreFilters.style.textDecoration = 'line-through'
        genreFilters.style.textDecorationColor = 'cyan'
        genreFilters.style.textDecorationThickness = '0.2rem'
        genreFilters.style.opacity = '0.1'
        
        let filters = document.getElementById('filters')
        filters.disabled = true

        yearFilters.style.textDecoration = 'line-through'
        yearFilters.style.textDecorationColor = 'cyan'
        yearFilters.style.textDecorationThickness = '0.2rem'
        yearFilters.style.opacity = '0.1'
        
        url = `https://api.themoviedb.org/3/search/movie?${params}`
    } else if (!value) {
        url = `https://api.themoviedb.org/3/discover/movie?${params}`

        genreFilters.style.textDecoration = 'none'
        yearFilters.style.textDecoration = 'none'
        genreFilters.style.opacity = '1'
        yearFilters.style.opacity = '1'
            
        let filters = document.getElementById('filters')
        filters.disabled = false
    }

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }

    const data = await res.json()

    return data.results
}

export { fetchRecommendedMovies, handleRandom, checkFilters }