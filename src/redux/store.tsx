import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import whishListReducer from './slices/whishListSlice';
import allProductsReducer from './slices/allProductsSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    whishList: whishListReducer,
    allProducts: allProductsReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
