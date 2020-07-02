import {
  GOOGLE_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from './userActionTypes';

export const googleSigninStart = () => ({
  type: GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (credentials) => ({
  type: EMAIL_SIGNIN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signInFail = (errMsg) => ({
  type: SIGNIN_FAIL,
  payload: errMsg,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFail = (errMsg) => ({
  type: SIGN_OUT_FAIL,
  payload: errMsg,
});

export const signUpStart = (credentials) => ({
  type: SIGN_UP_START,
  payload: credentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
    additionalData,
  },
});

export const signUpFail = (errMsg) => ({
  type: SIGN_UP_FAIL,
  payload: errMsg,
});
