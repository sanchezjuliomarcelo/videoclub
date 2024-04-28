document.addEventListener("DOMContentLoaded", function () {
  const formularioRegistro = document.getElementById("registro-form");

  formularioRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener los valores de los campos del formulario
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const contrasena = document.getElementById("contrasena").value;
      const confirmContrasena = document.getElementById("confirm-contrasena").value;
      const telefono = document.getElementById("telefono").value.trim();

      // Validar que todas las contraseñas sean iguales
      if (contrasena !== confirmContrasena) {
          alert("Las contraseñas no coinciden.");
          return;
      }

      // Crear objeto de usuario
      const usuario = {
          nombre: nombre,
          email: email,
          contrasena: contrasena,
          telefono: telefono
      };

      // Convertir objeto a formato JSON
      const usuarioJSON = JSON.stringify(usuario);

      // Crear un objeto Blob para almacenar el JSON
      const blob = new Blob([usuarioJSON], { type: "application/json" });

      // Crear enlace de descarga
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "usuario.json";

      // Simular clic en el enlace para descargar el archivo
      document.body.appendChild(a);
      a.click();

      // Liberar recursos
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Limpiar formulario
      formularioRegistro.reset();
  });
});

