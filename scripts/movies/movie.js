export const movieCard = (movieObject) => {
    return `
        <section class="movie-cards">
            <div class="movie_title"><h2>${movieObject.id}. ${movieObject.title}</div>
            <div><img class= "movie-image" src="${movieObject.image}"/></div><br>
            <div class="movie_director">${movieObject.director}</div><br>
            <div class="movie_rank">Movie Rank: ${movieObject.rank}</div></div>
        </section>
    `
}


