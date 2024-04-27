document.addEventListener("DOMContentLoaded", function() {
    const catalogoSection = document.getElementById("catalogo");
    const peliculas = ["Película 1", "Película 2", "Película 3"];
    const series = ["Serie 1", "Serie 2", "Serie 3"];

    function crearCard(titulo) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = titulo;
        return card;
    }

    function mostrarCatalogo() {
        peliculas.forEach(pelicula => {
            const card = crearCard(pelicula);
            catalogoSection.appendChild(card);
        });

        series.forEach(serie => {
            const card = crearCard(serie);
            catalogoSection.appendChild(card);
        });
    }

    mostrarCatalogo();
});
