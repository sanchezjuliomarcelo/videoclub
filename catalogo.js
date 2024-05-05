const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bea9d2fb3983892620514e92dbbf032e&page=1";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCH_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=bea9d2fb3983892620514e92dbbf032e&query=";
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get Movies
getMovies(API_URL);
async function getMovies(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMovies(data.results);
        console.log(data.results);
    } catch (error) {
        console.error("Error al obtener datos de películas:", error);
    }
}

function displayMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date, original_language } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMAGE_PATH}${poster_path}" alt="${title}" />
            <div class='movie-info'>
                <h3>${title}</h3>
                <span class="${getClassesByRating(vote_average)}">${vote_average.toFixed(1)}</span> <!-- Redondeado a 1 decimal -->
                <div class='overview'>
                    <h3>Resumen</h3>
                    ${overview}
                    <p><strong>Fecha de lanzamiento:</strong> ${release_date}</p>
                    <p><strong>Idioma original:</strong> ${original_language}</p>
                </div>
            </div>
        `;
        main.appendChild(movieElement);
    });
}

function getClassesByRating(rating) {
    if (rating >= 8) {
        return 'green';
    } else if (rating >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if (searchValue && searchValue !== '') {
        getMovies(SEARCH_URL + searchValue);
        search.value = '';
    } else {
        window.location.reload();
    }
});