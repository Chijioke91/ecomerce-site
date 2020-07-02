const {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGN_OUT_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAIL,
} = require('./userActionTypes');

const init_state = {
  currentUser: null,
  error: null,
};

export default (state = init_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case SIGNIN_FAIL:
    case SIGN_UP_FAIL:
    case SIGN_OUT_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
