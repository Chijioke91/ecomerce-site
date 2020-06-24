import {
  TOGGLE_CARD_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const init_state = {
  hidden: true,
  cartItems: [],
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    case TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
