const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const mail = document.querySelector('#mail').value 
    const contrasena = document.querySelector('#contrasena').value
    //const name = document.querySelector('#nombre').value

    const Users = JSON.parse(localStorage.getItem('users'))|| []

    const validUser = Users.find(user => user.mail === mail && user.password=== contrasena)

    if(!validUser){
        return alert('usuario y/o contraseña incorrectos!')
    }

    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login-success', JSON.stringify(validUser))
    window.location.href = '../index.html'
});