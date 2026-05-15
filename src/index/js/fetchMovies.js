let fetchRecommendedMovies = async () => {
    const res = await  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }
    const data = await res.json()
    return data.results
}

let handleSearch = async (search) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&query=${encodeURIComponent(search)}`)
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


let handleGenreFilter = async () => {    
    const selectedGenres = getSelectedGenres().join(',')
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&with_genres=${selectedGenres}`)
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }
    const data = await res.json()

    const searchBar = document.getElementById('searchBar')
    let value = searchBar.value

    if (value) {
        const searchResults = await handleSearch(value)
        let genreAndSearchFilteredMovies = []

        data.results.forEach(genreMovie => {
            searchResults.forEach(searchMovie => {
                if (genreMovie.id === searchMovie.id) {
                    genreAndSearchFilteredMovies.push(genreMovie)
                }
            })
        })

        return genreAndSearchFilteredMovies
    } else {
        return data.results
    }
}

let handleYearFilter = async () => {
    let fromYear = document.getElementById('fromYear').value
    let toYear = document.getElementById('toYear').value
    if (fromYear) {fromYear = fromYear + '-01-01'}
    if (toYear) {toYear = toYear + '-12-31'}

    const res = await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&primary_release_date.gte=${fromYear}&primary_release_date.lte=${toYear}`)
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }
    const data = await res.json()
    return data.results
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

export { fetchRecommendedMovies, handleSearch, handleGenreFilter, handleYearFilter, handleRandom }