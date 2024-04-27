document.addEventListener("DOMContentLoaded", function() {
    const equipoSection = document.getElementById("equipo");
    const programadores = [
        { nombre: "Programador 1", historia: "Historia del programador 1" },
        { nombre: "Programador 2", historia: "Historia del programador 2" },
        { nombre: "Programador 3", historia: "Historia del programador 3" },
        { nombre: "Programador 4", historia: "Historia del programador 4" }
    ];

    function crearHistoria(programador) {
        const historia = document.createElement("div");
        historia.classList.add("historia");
        historia.innerHTML = `<h2>${programador.nombre}</h2><p>${programador.historia}</p>`;
        return historia;
    }

    function mostrarEquipo() {
        programadores.forEach(programador => {
            const historia = crearHistoria(programador);
            equipoSection.appendChild(historia);
        });
    }

    mostrarEquipo();
});
