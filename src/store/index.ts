import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from 'store/reducers/auth'

import rootSaga from 'store/sagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage
}

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: ['persist/PERSIST']
    }
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
