import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFail } from './shopActions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotsToMap,
      snapshot
    );

    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionFail(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
