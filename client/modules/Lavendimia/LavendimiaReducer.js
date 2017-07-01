// Import Actions
import { ADD_CLIENTES, ADD_CLIENTE, ADD_ARTICULOS } from './LavendimiaActions';

// Initial State
const initialState = {
  data: [],
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
    case ADD_CLIENTE :
      return {
        data: [action.cliente, ...state.data],
      };
    default:
      return state;
  }
};

export const getClientes = state => state.lavendimia.data;

export const getArticulos = state => state.lavendimia.data;

export default LavendimiaReducer;
