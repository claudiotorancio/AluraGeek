import { clienteServices } from "../screens/servicios/client-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.querySelector('[data-email]').value;
    const contrasena = document.querySelector('[data-contrasena]').value;
    clienteServices
    .crearCliente(email,contrasena)
    .then(() => {
        window.location.href = "../screens/registro-completado.html"
    })
    .catch((err) => console.log(err));
});
