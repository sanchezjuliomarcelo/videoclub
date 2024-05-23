document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = document.getElementById('mail');
      const passwordInput = document.getElementById('contrasena');

      const email = emailInput.value.trim(); // Trimming para eliminar espacios en blanco al inicio y al final
      const password = passwordInput.value.trim();

      // Obtener usuarios registrados del localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Buscar el usuario por su correo electrónico
      const user = users.find(user => user.mail === email);

      // Verificar si el usuario existe y la contraseña coincide
      if (user && user.password === password) {
        // Si las credenciales son válidas, guardar usuario y contraseña en sessionStorage
        sessionStorage.setItem('current-user', JSON.stringify(user));
        sessionStorage.setItem('current-password', password);

        // Mostrar un mensaje de bienvenida en una ventana emergente
        mostrarMensaje(`Bienvenido ${user.name}`, "green");
        window.location.href = 'index.html'; // Corregido: Redireccionamiento directo a index.html
      } else {
        // Si el usuario no existe o la contraseña es incorrecta, mostrar un mensaje de error en una ventana emergente
        mostrarMensaje('Usuario y/o contraseña incorrectos!', "red");
        // Limpiar los campos de contraseña para un nuevo intento
        passwordInput.value = '';
        passwordInput.focus(); // Poner el foco en el campo de contraseña
      }
    });
  }
});

function mostrarMensaje(mensaje, color) {
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
    }
  });
}
