import { createSlice } from '@reduxjs/toolkit';

interface WhishListState_Type {
  whishList: ProductCard_Type[];
}

interface ProductCard_Type {
  // ИНДИВИДУАЛЬНЫЕ ХАРАКТЕРИСТИКИ (в зависимости от типа изделия):
  area?: string; // увлажнители воздуха
  invertor?: string; // сплит-системы
  heater?: string; // вент-установки
  recup?: string; // вент-установки
  color?: string; // увлажнители воздуха и сплит-системы
  // -----

  isInWhishList: boolean;
  isInStock: boolean;
  isPopular: boolean;
  title: string;
  maxPower: string;
  maxAirFlow: string;
  img: string;
  price: string;
  id: string;
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
