const { SET_CURRENT_USER } = require('./userActionTypes');

const init_state = {
  currentUser: null,
};

export default (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
