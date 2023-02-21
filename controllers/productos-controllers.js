import { productoServices } from "../screens/servicios/productos-servicios.js";

const nuevoProducto = (name, price, ImageUrl) => {
    const card = document.createElement("div");
    const contenido = `
    <div>
        <img src= ${ImageUrl} alt="">
        <h3>${name}</h3>
        <p>${price}</p>
        <a href="">Ver producto</a>
    </div>
    `;
   
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
    
}

const producto = document.querySelector('[datos-productos]')

const render = async () => {
    try{
        
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
           producto.appendChild(nuevoProducto(elemento.price, elemento.name, elemento.imageUrl)) 
            
        })
    }catch(erro){
        console.log(erro)
    }
}

render()