import { UPDATE_COLLECTIONS } from './shopTypes';

export const updateCollections = (collectionMap) => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionMap,
  };
};
