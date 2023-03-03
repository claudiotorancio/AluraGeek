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


 const validarUsuario = (email, contrasena,) => {
  return fetch('http://localhost:3000/perfil/')
    .then(response => response.json())
    .then(data => {

      const usuario = data.find(user => user.email === email);

      if (usuario && usuario.contrasena === contrasena) {
        if(usuario.rol === 'admin'){

            alert('Benevemido administrador: ' + email)
            window.location.href = './add-products.html'

        }else{

            alert('Bienvenido: ' + email)
        console.log("Usuario autenticado");
        return true;
        }
        
      } else {
        alert("Usuario o contraseña incorrectos")
        console.log("Usuario o contraseña incorrectos");
        return false;
      }
    })
    .catch(error => console.error(error));
}



export const clienteServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
    validarUsuario
};