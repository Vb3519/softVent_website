import { createSlice } from '@reduxjs/toolkit';

import hvacUnitsData from '../../data/hvacUnitsData';

const initialState = hvacUnitsData;

const hvacUnitsSlice = createSlice({
  name: 'hvacUnits',
  initialState: initialState,
  reducers: {
    turnOnWhishListLabel: (state, action) => {
      return state.map((productCard) => {
        return productCard.id === action.payload
          ? { ...productCard, isInWhishList: true }
          : productCard;
      });
    },

    turnOffWhishListLabel: (state, action) => {
      return state.filter((productCard) => {
        return productCard.id === action.payload
          ? { ...productCard, isInWhishList: false }
          : productCard;
      });
    },
  },
});

// Действия:
export const { turnOnWhishListLabel, turnOffWhishListLabel } =
  hvacUnitsSlice.actions;

// Слайс состояния:
export const selectHvacUnits = (state) => state.hvacUnits;

export default hvacUnitsSlice.reducer;
