document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(sessionStorage.getItem('current-user'));

    if (!user) {
        window.location.href = 'login.html'; // Redireccionar al usuario al login si no está autenticado
    }

    const logout = document.querySelector('#logout');

    logout.addEventListener('click', () => {
        mostrarMensaje('Hasta pronto!', 'green', () => {
            sessionStorage.removeItem('current-user');
            sessionStorage.removeItem('current-password');
            window.location.href = 'login.html'; // Redireccionar al usuario al login al cerrar sesión
        });
    });

    const banners = document.querySelectorAll(".banner img");
    let currentBanner = 0;

    function showBanner(index) {
        banners.forEach(banner => banner.style.display = "none");
        banners[index].style.display = "block";
    }

    function changeBanner() {
        currentBanner = (currentBanner + 1) % banners.length;
        showBanner(currentBanner);
    }

    setInterval(changeBanner, 4000);

    // Texto dinámico para el preheader
    const preheaderText = document.getElementById("preheader-text");
    const textos = [
        "Tenemos las últimas novedades en series y películas",
        "Disfruta del mejor entretenimiento en tu hogar",
        "Encuentra tus películas y series favoritas aquí"
    ];

    let indexTexto = 0;

    function cambiarTexto() {
        preheaderText.textContent = textos[indexTexto];
        indexTexto = (indexTexto + 1) % textos.length;
    }

    setInterval(cambiarTexto, 3000);
});

document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('mouseover', event => {
        const estrenos = document.getElementById('estrenos');
        const backgroundImage = window.getComputedStyle(event.target).getPropertyValue('background-image');
        estrenos.style.backgroundImage = backgroundImage;
    });
});

function mostrarMensaje(mensaje, color, callback) {
    Swal.fire({
        text: mensaje,
        icon: color === "green" ? "success" : "warning",
        timer: 2000,
        timerProgressBar: true,
        position: 'center',
        toast: true,
        showConfirmButton: false,
        customClass: {
            container: 'swal2-center-container'
        },
        willClose: callback
    });
}

const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bea9d2fb3983892620514e92dbbf032e&page=1&language=es-ES";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const main = document.getElementById('main');

// carrusel
getMovies(API_URL);
async function getMovies(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCarousel(data.results);
        console.log(data.results);
    } catch (error) {
        console.error("Error al obtener datos de películas:", error);
    }
}

function displayCarousel(movies) {
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    movies.slice(0, 10).forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date, original_language } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMAGE_PATH}${poster_path}" alt="${title}" />
            <div class='movie-info'>
                <h3>${title}</h3>
            </div>
        `;
        carouselContainer.appendChild(movieElement);
    });

    carrousel.appendChild(carouselContainer);

    setInterval(() => {
        carouselContainer.scrollLeft += carouselContainer.offsetWidth;
        if (carouselContainer.scrollLeft === (carouselContainer.scrollWidth - carouselContainer.offsetWidth)) {
            carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000);
}
