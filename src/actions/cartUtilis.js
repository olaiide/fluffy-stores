export const removeItem = (cart, itemId) => {
  let cartItems = cart.filter((item) => item.id !== itemId.id);
  return cartItems;
};
export const decreaseItem = (cart, itemToRemove) => {
  let decreasedCart;
  const existingCartItem = cart.find((item) => item.id === itemToRemove.id);
  if (existingCartItem.qty === 1) {
    decreasedCart = cart.filter((item) => item.id !== itemToRemove.id);
    return decreasedCart;
  }
  decreasedCart = cart.map((item) =>
    item.id === itemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  );

  return decreasedCart;
};
