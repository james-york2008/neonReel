import { fetchRecommendedMovies, handleRandom, checkFilters } from './fetchMovies.js'

const debounce = (fn, delay = 300) => {
    let timeoutId

    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

const movies = document.getElementById('movies')

let renderMovies = async (movieArray) => {
    movies.innerHTML = ''

    movieArray.forEach(movie => {
        let article = document.createElement('article')
        article.classList.add('movie')
        article.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
        let year = movie.release_date?.split('-')[0]

        article.innerHTML = `
        <h6>${movie.title}</h6>
        <p class="movieYear">${year}</p>
        <img src="images/star.png" alt="" class="star">

        <p class="voteAverage">${movie.vote_average.toFixed(1)}</p>`

        movies.append(article)
    }) 
}   

document.addEventListener('DOMContentLoaded', async() => {
    try {
        let data = await fetchRecommendedMovies()
        renderMovies(data)
    } catch (err) {
        console.error(err)
    }
})

const submitSearch = document.getElementById('submitSearch')
let searchBar = document.getElementById('searchBar')

submitSearch.addEventListener('click', async (event) => {
    event.preventDefault()
    let value = searchBar.value
    let data
  
    if (value) {
        try {
            data = await checkFilters()
            renderMovies(data)
        } catch (err) {
            console.error(err)
        }
    } else {
        try {
            data = await fetchRecommendedMovies()       
            renderMovies(data)
        } catch (err) {
            console.error(err)
        }
    }
    
})

const genreFilters = document.getElementById('genreFilters')
genreFilters.addEventListener('change', async () => {
    try {
        let data = await checkFilters()
        renderMovies(data)
    } catch (err) {
        console.error(err)
    }
})

const yearFilter = document.getElementById('yearFilter')
yearFilter.addEventListener('input', debounce(async () => {
    try {
        let data = await checkFilters()
        renderMovies(data)
    } catch (err) {
        console.error(err)
    }
}, 300))

const random = document.getElementById('randomize')
random.addEventListener('click', async () => {
    let movie
    try {
        movie = await handleRandom()
    } catch (err) {
        console.error(err)
    }

    movies.innerHTML = ``

    let article = document.createElement('article')
    article.classList.add('movie')
    article.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
    let year = movie.release_date?.split('-')[0]

    article.innerHTML = `
    <h6>${movie.title}</h6>
    <p class="movieYear">${year}</p>
    <img src="images/star.png" alt="" class="star">

    <p class="voteAverage">${movie.vote_average.toFixed(1)}</p>`

    movies.append(article)
})