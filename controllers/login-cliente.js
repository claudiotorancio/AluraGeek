const traerDatos = () => 
fetch('http://localhost:3000/perfil').then((respuesta) => 
    respuesta.json())
    
const   listaDeDatos = (email, contrasena,) => {
    return fetch(`http://localhost:3000/perfil`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email}, {contrasena},),
        
        
    })
    
}

const loginService = {
    listaDeDatos,
    
}
// console.log(JSON.stringify({email,}))


const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.querySelector('[data-email]').value;
    const contrasena = document.querySelector('[data-contrasena]').value;
      
   loginService
    .listaDeDatos(email, contrasena)
   .then(() => {
    if(formulario(email, contrasena) === listaDeDatos(email, contrasena))
        window.location.href = "/registro-complet.html"
    })
    .catch((err) => console.log(err));
    alert("Algunos de los datos no son correctos")

})
