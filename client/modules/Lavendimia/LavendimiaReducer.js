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
  data: [],
  clienteSuccess: null,
  articuloSuccess: null,
};

const LavendimiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENTES :
      return {
        data: action.clientes,
      };
    case ADD_ARTICULOS :
      return {
        data: action.articulos,
      };
    case ADD_VENTAS :
      return {
        data: action.ventas,
      };
    case ADD_CLIENTE :
      return {
        clienteSuccess: action.cliente,
      };
    case ADD_ARTICULO :
      return {
        articuloSuccess: action.articulo,
      };
    default:
      return state;
  }
};

export const getClienteSuccess = state => state.lavendimia.clienteSuccess;
export const getArticuloSuccess = state => state.lavendimia.articuloSuccess;
export const getClientes = state => state.lavendimia.data;
export const getArticulos = state => state.lavendimia.data;
export const getVentas = state => state.lavendimia.data;

export default LavendimiaReducer;
