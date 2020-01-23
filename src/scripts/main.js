getMovies();


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