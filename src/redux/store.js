import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '../redux/rootReducer';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const persistor = persistStore(store);
