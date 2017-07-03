// Import Actions
import {
  ADD_CLIENTES, ADD_ARTICULOS, ADD_VENTAS, ADD_CLIENTE } from './LavendimiaActions';

// Initial State
const initialState = {
  data: [],
  clienteSuccess: null,
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
    default:
      return state;
  }
};

export const getClienteSuccess = state => state.lavendimia.clienteSuccess;
export const getClientes = state => state.lavendimia.data;
export const getArticulos = state => state.lavendimia.data;
export const getVentas = state => state.lavendimia.data;

export default LavendimiaReducer;
