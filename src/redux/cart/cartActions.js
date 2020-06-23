import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from './cartActionTypes';

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
