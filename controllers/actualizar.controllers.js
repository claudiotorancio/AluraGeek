import { clienteServices } from "../screens/servicios/client-service.js";


const formulario = document.querySelector('[data-form]')

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null) {
        window.location.href = "/screens/error.html";
    }

    const email = document.querySelector('[data-email]');
    const contrasena = document.querySelector('[data-contrasena]');

    try {
        const perfil = await clienteServices.detalleCliente(id)
        if(perfil.email && perfil.contrasena){
            email.value = perfil.email;
            contrasena.value = perfil.contrasena;
        }else{
            throw new Error();
        }
    

    }catch(error){
        alert ("Hubo un error")
        window.location.href = "/screens/error.html";
    }
}

obtenerInformacion()

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const email = document.querySelector('[data-email]').value;
    const contrasena = document.querySelector('[data-contrasena]').value;
    clienteServices
    .actualizarCliente(email, contrasena, id)
    .then(() => {
        window.location.href = "../screens/edicion_concluida.html"
    })

})

