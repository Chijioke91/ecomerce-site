import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_SUCCESS,
} from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionFail = (errMsg) => {
  return {
    type: FETCH_COLLECTIONS_FAIL,
    payload: errMsg,
  };
};

export const fetchCollectionsStartAsync = () => async (dispatch) => {
  const collectionRef = firestore.collection('collections');

  try {
    dispatch(fetchCollectionStart());

    const snapshot = await collectionRef.get();

    const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);

    dispatch(fetchCollectionSuccess(collectionsMap));
  } catch (e) {
    dispatch(fetchCollectionFail(e.message));
  }
};
