let fetchRecommendedMovies = async function () {
    const res = await  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2ef7e9ce6c4341359a76e1ac108b1af3`)
    const data = await res.json()
    return data
}

let handleSearch = async function (search) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ef7e9ce6c4341359a76e1ac108b1af3&query=${search}`)
    const data = await res.json()
    return data
}

export { fetchRecommendedMovies, handleSearch }