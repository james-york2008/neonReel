import { fetchRecommendedMovies, handleSearch } from './fetchMovies.js'
    const movies = document.getElementById('movies')

let renderMovies = function (movieArray) {
    movies.innerHTML = ''
    movieArray.forEach(movie => {
        let article = document.createElement('article')
        article.classList.add('movie')
        article.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}?api_key=2ef7e9ce6c4341359a76e1ac108b1af3)`
        let year = movie.release_date?.split('-')[0]

        article.innerHTML = `
        <h6>${movie.title}</h6>
        <p class="movieYear">${year}</p>
        <img src="../../../images/star.png" alt="" class="star">

        <p class="voteAverage">${movie.vote_average}</p>`

        movies.append(article)
    })  
}   

document.addEventListener('DOMContentLoaded', async() => {
    let data = await fetchRecommendedMovies()
    console.log(data)  
    

    renderMovies(data.results)
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
  
    renderMovies(data.results)
    console.log(data)
})