document.addEventListener('DOMContentLoaded', () => {
    const submitSearchViaImg = document.getElementById('submitSearchViaImg')
    const submitSearch = document.getElementById('submitSearch')

    submitSearch.addEventListener('click', (event) => {
        event.preventDefault()
    })

    submitSearchViaImg.addEventListener('click', () => {
        submitSearch.click()
    })
})