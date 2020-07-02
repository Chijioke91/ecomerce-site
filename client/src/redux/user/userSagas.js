import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './userActionTypes';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInSuccess,
  signInFail,
  signOutFail,
  signOutSuccess,
  signUpFail,
  signUpSuccess,
} from './userActions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signinWithGoogleAuth() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (e) {
    yield put(signUpFail(e));
  }
}

export function* signInAfterSignup({ payload: { user, additionalData } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFail(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signinWithGoogleAuth);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGNIN_START, signinWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signUserOut);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignup);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
