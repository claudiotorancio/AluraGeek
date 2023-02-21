import  {clienteServices}  from "../screens/servicios/client-service.js";

//backticks
const crearNuevaLinea = (email, contrasena, id) => {
    const linea = document.createElement('tr');
    const contenido = `
    <tr>
    <td class="td" data-td>
    ${email}
    </td>
    <td>
    ${contrasena}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>                  
      </ul>
    </td>
  </tr>`;
  linea.innerHTML = contenido;
  const btn = linea.querySelector('button')
  btn.addEventListener('click', () => {
    const id = btn.id;
    clienteServices.eliminarCliente(id).then( respuesta => {
      console.log(respuesta)
    })
    .catch((err) => alert('Ocurrio un error'))
  });
  
  return linea;

};

const table = document.querySelector('[data-table]');

clienteServices
.listaClientes()
.then((data) => {
  data.forEach(({email,contrasena,id}) => {
  const nuevaLinea = crearNuevaLinea(email,contrasena,id);
  table.appendChild(nuevaLinea);
})
})
.catch((error) => alert('Ocurrio un error'))