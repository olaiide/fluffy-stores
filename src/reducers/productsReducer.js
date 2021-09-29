import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from "../actions/types";
import { addItemToCart } from "../actions/cartUtilis";
export const initialState = {
  products: null,
  cart: [],
  totalAmountToPay: 0,
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

   
    case REMOVE_PRODUCT : {
      
    }
    default:
      return state;
  }
};

export default productsReducer;
