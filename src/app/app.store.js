import AsyncStorage from '@react-native-async-storage/async-storage';
// Modules
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import {createFilter} from 'redux-persist-transform-filter';
import homeReducer from '../modules/home/reducers';

// Redux Persist
const persistConfig = {
  key: '@mobivaMobile',
  storage: AsyncStorage,
  blacklist: [],
  transforms: [createFilter('app', null, ['theme'])],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  home: homeReducer,
});

// Store && Persistor
export default () => {
  let store = createStore(persistedReducer, undefined, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};