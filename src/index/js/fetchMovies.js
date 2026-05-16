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
    const randomMovie = Math.floor(Math.random() * 20)
    let res

    const selectedGenres = getSelectedGenres().join(',')

    if (selectedGenres) {
        res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&with_genres=${selectedGenres}&sort_by=popularity.desc&page=${randomPage}`) 
    } else {
        res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&page=${randomPage}`)
    }

    if (!res.ok) {
        throw new Error(`http ${res.status}`)
    }

    const data = await res.json()
    return data.results[randomMovie]
}

let checkFilters = async () => {
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
        params.delete('selectedGenres', 'fromYear', 'toYear')

        genreFilters.style.textDecoration = 'line-through'
        genreFilters.style.textDecorationColor = 'cyan'
        genreFilters.style.textDecorationThickness = '0.2rem'
        genreFilters.style.opacity = '0.1'

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
    
    }

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`http ${res.status}`)
    }

    const data = await res.json()

    return data.results
}

export { fetchRecommendedMovies, handleRandom, checkFilters }