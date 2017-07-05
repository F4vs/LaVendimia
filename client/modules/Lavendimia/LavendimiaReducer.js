// Import Actions
import {
  ADD_CLIENTES,
  ADD_ARTICULOS,
  ADD_VENTAS,
  ADD_CLIENTE,
  ADD_ARTICULO,
}
  from './LavendimiaActions';

// Initial State
const initialState = {
  dataVentas: [],
  dataCliente: [],
  dataArticulo: [],
  clienteSuccess: null,
  articuloSuccess: null,
};

const LavendimiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENTES :
      return Object.assign({}, state, {
        dataCliente: action.clientes,
      });
    case ADD_ARTICULOS :
      return Object.assign({}, state, {
        dataArticulo: action.articulos,
      });
    case ADD_VENTAS :
      return Object.assign({}, state, {
        dataVentas: action.ventas,
      });
    case ADD_CLIENTE :
      return Object.assign({}, state, {
        clienteSuccess: action.cliente,
      });
    case ADD_ARTICULO :
      return Object.assign({}, state, {
        articuloSuccess: action.articulo,
      });
    default:
      return state;
  }
};

export const getClienteSuccess = state => state.lavendimia.clienteSuccess;
export const getArticuloSuccess = state => state.lavendimia.articuloSuccess;
export const getClientes = state => state.lavendimia.dataCliente;
export const getArticulos = state => state.lavendimia.dataArticulo;
export const getVentas = state => state.lavendimia.dataVentas;

export default LavendimiaReducer;
