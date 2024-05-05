const registro = document.querySelector("#registro-form")
registro.addEventListener("submit", (e)=> {
    e.preventDefault()
    const name = document.querySelector("#nombre").value
    const mail = document.querySelector("#email").value
    const password = document.querySelector("#contrasena").value
    const telefono = document.querySelector("#telefono").value

    const Users = JSON.parse(localStorage.getItem('users'))|| []
    const isUserRegistered = Users.find(user => user.mail === mail)

    if(isUserRegistered){
        return alert("El usuario ya esta registrado!")
    }
    Users.push({name: name,
                mail: mail,
                password: password,
                telefono: telefono
    })
    console.log(Users)
    localStorage.setItem('users', JSON.stringify(Users))
    console.log(Users)
    alert('registro exitoso!')
    //redireccion a login
    window.location.href="login.html"

})