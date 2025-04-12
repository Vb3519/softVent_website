import { createSlice } from '@reduxjs/toolkit';

import { ProductCard_Type } from '../../components/UI/ProductCard';

interface WhishListState_Type {
  whishList: ProductCard_Type[];
}

const initialState: ProductCard_Type[] = [];

const whishListSlice = createSlice({
  name: 'whishList',
  initialState: initialState,
  reducers: {
    addProductCardToWhishList: (
      state,
      action: { payload: ProductCard_Type; type: string }
    ) => {
      return [...state, action.payload];
    },

    removeProductCardFromWhishList: (state, action) => {
      return state.filter((productCard) => productCard.id !== action.payload);
    },
  },
});

export const { addProductCardToWhishList, removeProductCardFromWhishList } =
  whishListSlice.actions;

export const selectCurrentWhishList = (state: WhishListState_Type) =>
  state.whishList;

export default whishListSlice.reducer;
