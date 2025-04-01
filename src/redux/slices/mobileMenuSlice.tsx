import { createSlice } from '@reduxjs/toolkit';

interface mobileMenuState {
  mobileMenu: {
    isMobileMenuOpened: boolean;
  };
}

const initialState = {
  isMobileMenuOpened: false,
};

const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState: initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      return { ...state, isMobileMenuOpened: !state.isMobileMenuOpened };
    },
  },
});

// Действия:
export const { toggleMobileMenu } = mobileMenuSlice.actions;

// Состояние:
export const selectMobileMenuState = (state: mobileMenuState) =>
  state.mobileMenu.isMobileMenuOpened;

export default mobileMenuSlice.reducer;
