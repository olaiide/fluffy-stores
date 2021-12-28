import { decreaseItem, removeItem } from "../actions/cartUtilis";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADJUST_QUANTITY,
} from "../actions/types";
export const initialState = {
  products: null,
  cart: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCT: {
      //get the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }

    case REMOVE_PRODUCT: {
      return {
        ...state,
        cart: removeItem(state.cart, action.payload),
      };
    }

    case ADJUST_QUANTITY: {
      return {
        ...state,
        cart: decreaseItem(state.cart, action.payload),
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
