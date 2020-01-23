const container = document.querySelector("#movie-container");

const renderMovies = (movies) => {
    movies.forEach(movie => {
        container.innerHTML += movieFactory(movie);
    });
}

const movieFactory = (movie) => {
    return `
        <ul>
            <li>Title: ${movie.title}</li>
            <li>Date: ${movie.releaseDate}</li>
        </ul>
    `
}