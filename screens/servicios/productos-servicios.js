const listaProductos = () =>
    fetch("http://localhost:3000/producto")
        .then((respuesta) =>
            respuesta.json());

const crearProducto = (name, imageUrl, price, description,  ) => {
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
            id:uuid.v4()
        })
    })

        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('no fue posible crear un producto')

            }

            return respuesta.body
        })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE", 
    })
 }

 const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => respuesta.json()
    )
 }

 const actualizarProducto = (name, price, imageUrl, description, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name, price, imageUrl, description})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))
 }


export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}


