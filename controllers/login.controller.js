
import { clienteServices } from "../screens/servicios/client-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.querySelector('[data-email]').value;
    const contrasena = document.querySelector('[data-contrasena]').value;
    
    clienteServices
      .validarUsuario(email, contrasena)
      .then((authenticated) => {
        if (authenticated) {
          window.location.href = "/index.html"
        } else {
        }
      })
      .catch((err) => console.log(err));
  });