import React, { useContext, useEffect } from "react";
import productContext from "../context/product/productState";
const Cart = () => {
  const productState = useContext(productContext);
  const { cartItems } = productState;
  return (
    <div>
      <p>{cartItems.length}</p>
    </div>
  );
};
export default Cart;
