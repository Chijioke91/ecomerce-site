import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '../redux/rootReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
