import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => {
  console.log("action");
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const decreaseCartItemQuantity = (item) => {
  console.log("action");

  return {
    type: CartActionTypes.DECREASE_CART_ITEM_QUANTITY,
    payload: item,
  };
};
