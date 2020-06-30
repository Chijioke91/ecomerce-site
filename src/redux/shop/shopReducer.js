import { UPDATE_COLLECTIONS } from './shopTypes';

const init_state = {
  collections: null,
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};
