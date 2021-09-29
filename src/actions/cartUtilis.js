export const addItemToCart = (cartItemToAdd, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/*
export const addItemToCart = (cartItems, itemToAdd) => {
  let newCart;
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    newCart = cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem(
      "inCart",
      JSON.stringify([...cartItems, { ...itemToAdd, quantity: 1 }])
    );
    return newCart;
  }

  localStorage.setItem(
    "inCart",
    JSON.stringify([...cartItems, { ...itemToAdd, quantity: 1 }])
  );
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
*/
