import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '../redux/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { compose, applyMiddleware } from 'redux';
import { fetchCollectionsStart } from './shop/shopSagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
