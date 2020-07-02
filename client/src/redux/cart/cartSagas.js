import { put, all, call, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cartActions';
import { SIGN_OUT_SUCCESS } from '../user/userActionTypes';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
