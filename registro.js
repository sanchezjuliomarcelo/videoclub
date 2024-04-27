document.addEventListener("DOMContentLoaded", function () {
  const formularioRegistro = document.getElementById("registro-form");

  formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const confirmContrasena = document
      .getElementById("confirm-contrasena")
      .value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (!nombre || !email || !contrasena || !confirmContrasena || !telefono) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (contrasena !== confirmContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("¡Registro exitoso!");
    formularioRegistro.reset();
  });
});
