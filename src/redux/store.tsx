import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import whishListReducer from './slices/whishListSlice';
import allProductsReducer from './slices/allProductsSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

// Редьюсеры фильтров:
import splitSystemsFilterReducer from './slices/splitSystemsFilterSlice';
import ventilationUnitsFilterReducer from './slices/ventilationUnitsFilterSlice';
import microClimateFilterReducer from './slices/microClimateFilterSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    whishList: whishListReducer,
    allProducts: allProductsReducer,
    shoppingCart: shoppingCartReducer,

    // фильтры:
    splitSystemsFilter: splitSystemsFilterReducer,
    ventilationUnitsFilter: ventilationUnitsFilterReducer,
    microClimateFilter: microClimateFilterReducer,
  },
});

export default store;
