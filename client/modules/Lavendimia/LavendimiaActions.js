import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CLIENTES = 'LAVENDIMIA/ADD_CLIENTES';
export const ADD_ARTICULOS = 'LAVENDIMIA/ADD_ARTICULOS';
export const ADD_VENTAS = 'LAVENDIMIA/ADD_VENTAS';
export const ADD_CLIENTE = 'LAVENDIMIA/ADD_CLIENTE';

// Export Actions

export function addClientes(clientes) {
  return {
    type: ADD_CLIENTES,
    clientes,
  };
}

export function addArticulos(articulos) {
  return {
    type: ADD_ARTICULOS,
    articulos,
  };
}

export function addVentas(ventas) {
  return {
    type: ADD_VENTAS,
    ventas,
  };
}

export function addCliente(cliente) {
  return {
    type: ADD_CLIENTE,
    cliente,
  };
}

export function addClienteRequest(cliente) {
  return (dispatch) => {
    return callApi('cliente', 'post', {
      cliente: {
        nombre: cliente.nombre,
        primerapellido: cliente.primerapellido,
        segundoapellido: cliente.segundoapellido,
        rfc: cliente.rfc,
      },
    }).then(res => dispatch(addCliente(res.cliente)));
  };
}

export function fetchClientes() {
  return (dispatch) => {
    return callApi('clientes').then(res => dispatch(addClientes(res.clientes)));
  };
}

export function fetchArticulos() {
  return (dispatch) => {
    return callApi('articulos').then(res => dispatch(addArticulos(res.articulos)));
  };
}

export function fetchVentas() {
  return (dispatch) => {
    return callApi('ventas').then(res => dispatch(addVentas(res.ventas)));
  };
}
