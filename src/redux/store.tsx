import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import whishListReducer from './slices/whishListSlice';
import allProductsReducer from './slices/allProductsSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

// Редьюсеры фильтров:
import splitSystemsFilterReducer from './slices/splitSystemsFilterSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    whishList: whishListReducer,
    allProducts: allProductsReducer,
    shoppingCart: shoppingCartReducer,
    // фильтры:
    splitSystemsFilter: splitSystemsFilterReducer,
  },
});

export default store;
