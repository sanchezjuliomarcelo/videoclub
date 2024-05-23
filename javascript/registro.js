const registro = document.querySelector("#registro-form");

registro.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#nombre").value;
    const mail = document.querySelector("#email").value;
    const password = document.querySelector("#contrasena").value;
    const telefono = document.querySelector("#telefono").value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.mail === mail);

    if (isUserRegistered) {
        mostrarMensaje("El usuario ya está registrado!", "red");
        return;
    }

    Users.push({
        name: name,
        mail: mail,
        password: password,
        telefono: telefono
    });

    localStorage.setItem('users', JSON.stringify(Users));
    mostrarMensaje('Registro exitoso!', "green", () => {
        // Redireccionar a login después de mostrar el mensaje de registro exitoso
        window.location.href = "../login.html";
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

