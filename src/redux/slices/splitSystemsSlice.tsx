import { createSlice } from '@reduxjs/toolkit';

import splitSystemsData from '../../data/splitSystemsData';

interface splitSystemsSlice_Type {
  splitSystems: ProductCard_Type[];
}

interface ProductCard_Type {
  isInWhishList: boolean;
  isInStock: boolean;
  isPopular: boolean;
  area?: string;
  invertor?: string;
  heater?: string;
  recup?: string;
  title: string;
  maxPower: string;
  maxAirFlow: string;
  img: string;
  color: string;
  price: string;
  id: string;
}

const initialState: ProductCard_Type[] = splitSystemsData;

const splitSystemsSlice = createSlice({
  name: 'splitSystems',
  initialState: initialState,
  reducers: {
    // Подсветка баджа "избранное" на карточке товара:
    turnOnWhishListLabel: (state, action) => {
      return state.map((productCard) => {
        return productCard.id === action.payload
          ? { ...productCard, isInWhishList: true }
          : productCard;
      });
    },

    turnOffWhishListLabel: (state, action) => {
      return state.map((productCard) => {
        return productCard.id === action.payload
          ? { ...productCard, isInWhishList: false }
          : productCard;
      });
    },
  },
});

// Действия:
export const { turnOnWhishListLabel, turnOffWhishListLabel } =
  splitSystemsSlice.actions;

// Часть состояния:
export const selectSplitSystems = (state: splitSystemsSlice_Type) =>
  state.splitSystems;

export default splitSystemsSlice.reducer;
