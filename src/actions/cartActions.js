import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from "./types";
import axios from "axios";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const addProduct = (itemId, value) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProducts());
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const items = response.data;
      dispatch(getProductsSuccess(items));
    });
  };
};
