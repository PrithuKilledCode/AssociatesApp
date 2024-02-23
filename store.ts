import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './Redux/sagas/watcherFunctions';
const sagaMiddleware = createSagaMiddleware();
import {persistStore, persistReducer} from 'redux-persist'; //persit user aur persist store import karega
import Storage from '@react-native-async-storage/async-storage';
import {
  getCasesReducer,
  getEventReducer,
  getTasksReducer,
  getUserReducer,
} from './Redux/slices';

const persistConfig = {
  key: 'root',
  storage: Storage,
  version: 1,
}; // persist config banaega
const rootReducer = combineReducers({
  getUser: getUserReducer,
  getCases: getCasesReducer,
  getTasks: getTasksReducer,
  getEvents: getEventReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(RootSaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
