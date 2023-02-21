const listaClientes = () => 
fetch("http://localhost:3000/perfil").then((respuesta) => 
    respuesta.json())

const  crearCliente = (email, contrasena,) => {
    return fetch("http://localhost:3000/perfil", {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email,contrasena, id:uuid.v4()}),
    })
}

 const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    })
 }

 const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
    )
 }

 const actualizarCliente = (email, contrasena, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({email, contrasena})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))
 }
 

export const clienteServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,

};