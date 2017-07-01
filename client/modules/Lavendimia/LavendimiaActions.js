import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CLIENTES = 'LAVENDIMIA/ADD_CLIENTES';
export const ADD_CLIENTE = 'LAVENDIMIA/ADD_CLIENTE';
export const ADD_ARTICULOS = 'LAVENDIMIA/ADD_ARTICULOS';
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

export function addCliente(clientes) {
  return {
    type: ADD_CLIENTE,
    clientes,
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
