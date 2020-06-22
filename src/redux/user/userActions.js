import { SET_CURRENT_USER } from './userActionTypes';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
