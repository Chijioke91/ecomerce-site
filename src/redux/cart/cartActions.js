import {
  TOGGLE_CARD_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from './cartActionTypes';

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CARD_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const clearItem = (id) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: id,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
