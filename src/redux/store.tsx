import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';

import whishListReducer from './slices/whishListSlice';

import allProductsReducer from './slices/allProductsSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    whishList: whishListReducer,
    allProducts: allProductsReducer,
  },
});

export default store;
