const container = document.querySelector("#movie-container");

// Rendering to DOM
const renderMovies = (movies) => {
    movies.forEach(movie => {
        container.innerHTML += movieFactory(movie);
    });
}

// Creating HTML respresentation
const movieFactory = (movie) => {
    return `
        <ul>
            <li>${movie.title}</li>
            <li>${movie.releaseDate}</li>
        </ul>
    `
}




// Trying to add new movie to HTML page when save btn is clicked
const newMovie = document.getElementById("movie-entry").value;
const newContainer = document.getElementById("new-movie-container");

// Creating HTML respresentation
const newMovieFactory = (movie) => {
    return `
        <ul>
            <li>${movie}</li>
        </ul>
    `
}

// Rendering to DOM
const showMovie = (newMovie) => {
    newContainer.innerHTML += newMovieFactory(newMovie);
}

