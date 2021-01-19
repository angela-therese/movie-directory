import { movieDataCopy } from "./movieDataProvider.js";
import { movieCard } from "./movie.js"


let movieContainer = document.querySelector("#movie-cards-list")

export function movieList(){
    const movieSlice = movieDataCopy();
    let movieHTMLString = '';

    for(const currentMovie of movieSlice){
        movieHTMLString += movieCard(currentMovie)
    }
    console.log(movieHTMLString)
    movieContainer.innerHTML = `${movieHTMLString}</div>`

}