const listaProductos = () => 
    fetch("http://localhost:3000/producto")
    .then((respuesta) => 
    respuesta.json());

    const crearProducto = (name, imageUrl, price,  description) => {
        return fetch("http://localhost:3000/producto", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
            description,
            
        })
        
        })
        
        .then((respuesta) => {
            if(!respuesta.ok){
                throw new Error('no fue posible crear un producto')
                
            }
            
            return respuesta.body
        })
    }
    

    export const productoServices =  {
        listaProductos,
        crearProducto,
        
    }

    
    