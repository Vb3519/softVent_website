import { createSlice } from '@reduxjs/toolkit';

// ТИПЫ:
import { ProductCard_Type } from '../../components/UI/ProductCard';

interface ShoppingCartState_Type {
  shoppingCart: ProductCard_Type[];
}

const initialState: ProductCard_Type[] = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    addProductToShoppingCart: (
      state,
      action: { payload: ProductCard_Type; type: string }
    ) => {
      return [...state, action.payload];
    },

    removeProductFromShoppingCart: (state, action) => {
      return state.filter((productCard) => {
        return productCard.id !== action.payload;
      });
    },
  },
});

// Действия:
export const { addProductToShoppingCart, removeProductFromShoppingCart } =
  shoppingCartSlice.actions;

// Слайс состояния:
export const selectCurrentShoppingCart = (state: ShoppingCartState_Type) =>
  state.shoppingCart;

export default shoppingCartSlice.reducer;
