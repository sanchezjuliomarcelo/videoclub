document.addEventListener("DOMContentLoaded", function () {
  const formularioRegistro = document.getElementById("registro-form");

  formularioRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener los valores de los campos del formulario
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const contrasena = document.getElementById("contrasena").value.trim();
      const confirmContrasena = document.getElementById("confirm-contrasena").value.trim();
      const telefono = document.getElementById("telefono").value.trim();

      // Mostrar la información cargada en los campos en la consola
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Contraseña:", contrasena);
      console.log("Confirmar Contraseña:", confirmContrasena);
      console.log("Teléfono:", telefono);

      // Validar que todas las contraseñas sean iguales
      if (contrasena !== confirmContrasena) {
          alert("Las contraseñas no coinciden.");
          return;
      }

      // Mostrar mensaje de éxito si todo está correcto
      alert("¡Registro exitoso!");
      formularioRegistro.reset();
  });
});


