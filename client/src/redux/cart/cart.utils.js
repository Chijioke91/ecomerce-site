export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (itemExists.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
