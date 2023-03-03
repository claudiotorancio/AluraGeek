import { productoServices } from "../screens/servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const imageUrl = document.querySelector('[data-imageUrl]').value;
    const description = document.querySelector('[data-description]').value;

    productoServices
    .crearProducto(name, imageUrl, price, description)
    .then((respuesta) => {
        
        alert("El producto fue creado con exito")
        console.log(respuesta)
        
    }).catch((err) => {
        console.log(err)
    })
    
})