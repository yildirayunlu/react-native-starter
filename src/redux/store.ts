import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import Reducers from '@redux/reducers';

const persistConfig = {
  key: 'reduxStore',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const middlewares = [thunk];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export const makeStore = () => {
  const store = createStore(persistedReducer, {}, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
};
