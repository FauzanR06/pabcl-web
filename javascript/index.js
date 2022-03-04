const IMAGEBASEURL= "https://image.tmdb.org/t/p/w500"

// function showDetails(element){
//     body.style.overflow="hidden"
//     deatailsPage.style.display="flex";
//     img.src= IMGPATH + element.poster_path;
//     title.innerHTML = `${element.title}`;
//     cardName.innerHTML= `${element.title}`;
//     date.innerHTML= `${element.release_date}`;
//     rating.innerHTML= `${element.vote_average}`;
//     description.innerHTML= `${element.overview}`;
//     language.innerHTML= `${element.original_language}`
// }


const showData = (movies) => {
    let HTMLCard = ''
    const container = document.getElementById('container')
    for (let index = 0; index < movies.length; index++) {
        const data = movies[index]

        const year = new Date(data.release_date).getFullYear()
        HTMLCard += `
        <a href="/detail.html" class="card">
            <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
            <div class="card__content">
                <p class="card__title">${data.title} (${year})</p>
            </div>
        </a>
        `
    }
    container.innerHTML = HTMLCard
}

const detailMovie = (movies) => {
    const container = document.getElementById('container')

    const data = movies[index]

    const year = new Date(data.release_date).getFullYear()

    let HTMLCard =`
    <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
    <div class="card__content">
        <p class="card__title">${data.title} (${year})</p>
    </div>

    `
    container.innerHTML = HTMLCard
}
window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
            const results = data.results

            showData(results)
            detailMovie(results)
        })
})
