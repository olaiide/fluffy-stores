import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
