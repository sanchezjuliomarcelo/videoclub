function renderMovies(moviesData) {
    const container = document.getElementById("movies-container");
    container.innerHTML = "";
    
    for (const movie of moviesData) {
      const div = document.createElement("div");
      div.classList.add("movie");
      
      const img = document.createElement("img");
      img.src = movie.Images[0]; // Establece el atributo src para mostrar la imagen
      div.appendChild(img);
      
      const title = document.createElement("h2");
      title.textContent = movie.Title;
      div.appendChild(title);
      
      const rating = document.createElement("p");
      rating.textContent = `Rating: ${movie.imdbRating}`;
      div.appendChild(rating);
            
      container.appendChild(div);
    }
  }
  
  renderMovies(movies);
  