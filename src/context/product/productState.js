import axios from "axios";
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from "../types";
import { useReducer } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";

const ProductState = ({ children }) => {
  const initialState = {
    loading: true,
    products: null,
    cartItems: [],
    totalAmount: 0,
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (cartItem) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: cartItem,
    });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        getProducts,
        cartItems: state.cartItems,
        totalAmount: state.totalAmount,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
