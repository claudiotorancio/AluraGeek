// actualizar productos
import { productoServices } from "../screens/servicios/productos-servicios.js";

const form = document.querySelector('[data-form]')


const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null) {
        window.location.href = "/screens/error.html";
    }

    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-price]');
    const imageUrl = document.querySelector('[data-imageUrl]');
    

    try {
        const producto = await productoServices.detalleProducto(id)
        if(producto.name && producto.price && producto.imageUrl){
            name.value = producto.name;
            price.value = producto.price;
            imageUrl.value = producto.imageUrl;
        }else{
            throw new Error();
        }
    

    }catch(error){
        alert ("Hubo un error")
        window.location.href = "/screens/error.html";
        console.log(error)
    }
}

obtenerInfo()

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const imageUrl = document.querySelector('[data-imageUrl]').value;
    

    productoServices
    .actualizarProducto(name, price, imageUrl, id)
    .then(() => {
        window.location.href = "../screens/edicion_concluida.html"
    })

})