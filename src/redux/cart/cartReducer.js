import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from './cartActionTypes';
import { addItemToCart } from './cart.utils';

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

    default:
      return state;
  }
};
