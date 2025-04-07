import { createSlice } from '@reduxjs/toolkit';

// Данные:
import splitSystemsData from '../../data/splitSystemsData';
import hvacUnitsData from '../../data/hvacUnitsData';
import microClimateData from '../../data/microClimateData';

// Типы:
import { ProductCard_Type } from '../../components/UI/ProductCard';

interface allProductsState_Type {
  allProducts: {
    splitSystemsData: ProductCard_Type[];
    hvacUnitsData: ProductCard_Type[];
    microClimateData: ProductCard_Type[];
    currentCategory: string;
  };
}

const initialState = {
  splitSystemsData: splitSystemsData,
  hvacUnitsData: hvacUnitsData,
  microClimateData: microClimateData,
  currentCategory: '',
};

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      return { ...state, currentCategory: action.payload };
    },

    turnOnWhishListLabel: (state, action) => {
      const { currentCategory } = state;

      if (!currentCategory) return;

      state[currentCategory].map((productCard: ProductCard_Type) => {
        return productCard.id === action.payload
          ? (productCard.isInWhishList = true)
          : productCard;
      });
    },

    turnOffWhishListLabel: (state, action) => {
      const { currentCategory } = state;

      if (!currentCategory) return;

      state[currentCategory].map((productCard: ProductCard_Type) => {
        return productCard.id === action.payload
          ? (productCard.isInWhishList = false)
          : productCard;
      });
    },
  },
});

// Действия:
export const {
  setCurrentCategory,
  turnOnWhishListLabel,
  turnOffWhishListLabel,
} = allProductsSlice.actions;

// Слайсы состояния:
export const selectCurrentCategory = (state: allProductsState_Type) =>
  state.allProducts.currentCategory;

export const selectSplitSystems = (state: allProductsState_Type) =>
  state.allProducts.splitSystemsData;
export const selectHvacUnits = (state: allProductsState_Type) =>
  state.allProducts.hvacUnitsData;
export const selectMicroClimate = (state: allProductsState_Type) =>
  state.allProducts.microClimateData;
export const selectAllProducts = (state: allProductsState_Type) =>
  state.allProducts;

export default allProductsSlice.reducer;
