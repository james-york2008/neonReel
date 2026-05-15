import { fetchRecommendedMovies, handleSearch, handleGenreFilter, handleYearFilter, handleRandom } from './fetchMovies.js'
const movies = document.getElementById('movies')

let renderMovies = (movieArray) => {
    movies.innerHTML = ''
    movieArray.forEach(movie => {
        let article = document.createElement('article')
        article.classList.add('movie')
        article.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
        let year = movie.release_date?.split('-')[0]

        article.innerHTML = `
        <h6>${movie.title}</h6>
        <p class="movieYear">${year}</p>
        <img src="images/star.png" alt="" class="star">

        <p class="voteAverage">${movie.vote_average}</p>`

        movies.append(article)
    })  
}   

document.addEventListener('DOMContentLoaded', async() => {
    let data = await fetchRecommendedMovies()
    
    renderMovies(data)
})

const submitSearch = document.getElementById('submitSearch')
let searchBar = document.getElementById('searchBar')

submitSearch.addEventListener('click', async (event) => {
    event.preventDefault()
    let value = searchBar.value
    let data
  
    if (value) {
        data = await handleSearch(value)
    } else {
        data = await fetchRecommendedMovies()       
    }
    
    renderMovies(data)
})

const genreFilters = document.getElementById('genreFilters')
genreFilters.addEventListener('change', async () => {
    let data = await handleGenreFilter()
    renderMovies(data)
})

const yearFilter = document.getElementById('yearFilter')
yearFilter.addEventListener('input', async () => {
    let data = await handleYearFilter()
    renderMovies(data)
})

const random = document.getElementById('randomize')
random.addEventListener('click', async () => {
    let movie = await handleRandom()
    movies.innerHTML = ``

    let article = document.createElement('article')
    article.classList.add('movie')
    article.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
    let year = movie.release_date?.split('-')[0]

    article.innerHTML = `
    <h6>${movie.title}</h6>
    <p class="movieYear">${year}</p>
    <img src="images/star.png" alt="" class="star">

    <p class="voteAverage">${movie.vote_average}</p>`

    movies.append(article)
})