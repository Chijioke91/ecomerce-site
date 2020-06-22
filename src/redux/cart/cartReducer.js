import { TOGGLE_CARD_HIDDEN } from './cartActionTypes';

const init_state = {
  hidden: true,
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    case TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
