import { productoServices } from "../screens/servicios/productos-servicios.js";


const crearNuevaLinea = (name, price, imageUrl, id) => {
    const linea = document.createElement('tr');
    const contenido = `
    <tr>
    <td class="td" data-td>
    ${imageUrl}
    </td>
    <td>
    ${name}</td>
    <td>
    <td>
    ${price}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar-producto.html?id=${id}"
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
    productoServices.eliminarProducto(id).then( respuesta => {
      console.log(respuesta)
    })
    .catch(() => alert('Ocurrio un error'))
  });
  
  return linea;
};

const table = document.querySelector('[data-table]');

productoServices
.listaProductos()
.then((data) => {
  data.forEach(({name, price, imageUrl, id}) => {
  const nuevaLinea = crearNuevaLinea(name, price, imageUrl, id);
  table.appendChild(nuevaLinea);
})
})
.catch((err) => alert('Ocurrio un error'
))
