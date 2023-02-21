import { productoServices } from "../screens/servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-name]').value;
    const precio = document.querySelector('[data-precio]').value;
    const url = document.querySelector('[data-url]').value;
    const description = document.querySelector('[data-description]').value;

    productoServices
    .crearProducto(nombre, url, precio, description)
    .then((respuesta) => {
        window.location.href = "../screens/index.html"
        alert("El producto fue creado con exito")
        console.log(respuesta)
        
    }).catch((err) => {
        console.log(err)
    })
    
})