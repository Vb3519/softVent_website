import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import splitSystemsReducer from './slices/splitSystemsSlice';
import whishListReducer from './slices/whishListSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    whishList: whishListReducer,
    splitSystems: splitSystemsReducer,
  },
});

export default store;
