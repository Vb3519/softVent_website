import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import mobileMenuReducer from './slices/mobileMenuSlice';
import whishListReducer from './slices/whishListSlice';
import allProductsReducer from './slices/allProductsSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

// Редьюсеры фильтров:
import splitSystemsFilterReducer from './slices/splitSystemsFilterSlice';
import ventilationUnitsFilterReducer from './slices/ventilationUnitsFilterSlice';
import microClimateFilterReducer from './slices/microClimateFilterSlice';

// Работа с sessionStorage:
const persistConfig = {
  key: 'root', // persist:root
  storage: storageSession,
};

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  whishList: whishListReducer,
  allProducts: allProductsReducer,
  shoppingCart: shoppingCartReducer,

  // фильтры:
  splitSystemsFilter: splitSystemsFilterReducer,
  ventilationUnitsFilter: ventilationUnitsFilterReducer,
  microClimateFilter: microClimateFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export default store;
