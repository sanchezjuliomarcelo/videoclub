document.addEventListener("DOMContentLoaded", function() {
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
