document.addEventListener("DOMContentLoaded", function() {
    const teamSection = document.getElementById("team-section");

     const teamMembers = [
        {
            name: "Alfredo Garcia",
            role: "Director de Desarrollo y Tecnologías",
            bio: "Soy una persona responsable, proactiva, resolutiva y con gran disposición al trabajo en equipo.Siempre dispuesto a compartir mi experiencia y adquirir nuevos conocimientos para el crecimiento personal y profesional. Me gusta pasar tiempo con mi familia y amigos, capacitarme continuamente y enfrentar nuevos desafíos que pongan a prueba mi capacidad.",
            imgSrc: "/img/nosotros/atilio-image.jpg",
            linkedin: "https://www.linkedin.com/in/aangarcia/"
        },
        {
            name: "Cesar Mercado",
            role: "Analista Programador Universitario",
            bio: "Soy Cesar Mercado estudiante avanzado de la carrera Analista Programador Universitario. Actualmente me encuentro buscando trabajo, aprendo rápido, tengo buena predisposición, me gusta trabajar en equipo, tengo disponibilidad horaria y soy proactivo.",
            imgSrc: "/img/nosotros/cesar-image.jpg",
            linkedin: "https://www.linkedin.com/in/cesar-mercado-m10/"
        },
        {
            name: "Dante Dullka",
            role: "Desarrollador .NET",
            bio: "¡Hola comunidad de LinkedIn! Soy Dante, un desarrollador web enamorado de .NET, dedicado a la mejora constante y la capacitación continua. Mi experiencia incluye trabajo con tecnologías como .NET, HTML5, jQuery, Bootstrap y React Js, y estoy comprometido con aprender y crecer en este emocionante campo.",
            imgSrc: "/img/nosotros/dante-image.jpg",
            linkedin: "https://www.linkedin.com/in/dante-dullka/"
        },
        {
            name: "Julio Sanchez",
            role: "IT Project Manager ",
            bio: "Soy un profesional del ecommerce con más de 20 años de experiencia en el sector tecnológico, liderando proyectos de implementación y desarrollo de aplicaciones con el objetivo de optimizar procesos y eficientizar la operatoria mediante la mejora continua. Actualmente, soy el Jefe de Aplicaciones y Proyectos eCommerce en PC Arts Argentina.",
            imgSrc: "/img/nosotros/julio-image.jpg",
            linkedin: "https://www.linkedin.com/in/sanchezjuliomarcelo/"
        }
    ];

    function createTeamCards() {
        teamMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardContent = `
                <img src="${member.imgSrc}" alt="${member.name}">
                <h2>${member.name}</h2>
                <h3>${member.role}</h3>
                <p>${member.bio}</p>
                <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a> <!-- Agregar el icono de LinkedIn -->
            `;

            card.innerHTML = cardContent;
            teamSection.appendChild(card);
        });
    }

    createTeamCards();
});
