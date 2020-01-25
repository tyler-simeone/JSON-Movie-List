getMovies();

// this will add the newMovie value to our existing movie DB (actually
// don't know how to do that yet so this will just display new movie
// in the HTML)
document.getElementById("add-movie").addEventListener("click", showMovie);








// ANOTHER WAY: VVV

// fetch("http://localhost:8088/movies")
//     .then(movies => movies.json())
//     .then(parsedMovies => {
//         parsedMovies.forEach(movie => {
//             // console.table(movie);
//             // const movieAsHTML = movieFactory(movie);
//             // renderMovie(movieAsHTML);
//         })
//     })


// const movieFactory = (movie) => {
//     return `
//         <ul>
//             <li>${movie.title}</li>
//             <li>${movie.releaseDate}</li>
//         </ul>
//     `
// }

// const renderMovie = (movie) => {
//     container.innerHTML += movie;
// }