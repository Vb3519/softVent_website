import { createSlice } from '@reduxjs/toolkit';

interface SplitSystemsFilterState_Type {
  splitSystemsFilter: {
    developers: {
      ballu: boolean;
      electrolux: boolean;
      zanussi: boolean;
    };
    price: {
      minPrice: number;
      maxPrice: number;
    };

    isInStock: boolean;

    invertor: boolean;
    color: {
      white: boolean;
      black: boolean;
    };
    onlyFavourite: boolean;
  };
}

const initialState = {
  developers: {
    ballu: false,
    electrolux: false,
    zanussi: false,
  },
  price: {
    minPrice: 24200,
    maxPrice: 35800,
  },

  isInStock: false,

  invertor: false,
  color: {
    white: false,
    black: false,
  },
  onlyFavourite: false,
};

const splitSystemsFilterSlice = createSlice({
  name: 'splitSystemsFilter',
  initialState: initialState,
  reducers: {
    // Производитель:
    setDeveloper: (
      state,
      action: { payload: { developer: string }; type: string }
    ) => {
      const { developer } = action.payload;
      state.developers[developer] = !state.developers[developer];
    },

    // Цена (минимум):
    setMinPrice: (
      state,
      action: {
        payload: { minPrice: string; priceValue: string };
        type: string;
      }
    ) => {
      const { minPrice, priceValue } = action.payload;
      state.price[minPrice] = priceValue;
    },

    // Цена (максимум):
    setMaxPrice: (
      state,
      action: {
        payload: { maxPrice: string; priceValue: string };
        type: string;
      }
    ) => {
      const { maxPrice, priceValue } = action.payload;
      state.price[maxPrice] = priceValue;
    },

    // Статус (наличие):
    setStatus: (state) => {
      state.isInStock = !state.isInStock;
    },

    // Инверторное управление:
    setInvertor: (state) => {
      state.invertor = !state.invertor;
    },

    // Цвет корпуса:
    setColor: (state, action: { payload: { color: string }; type: string }) => {
      const { color } = action.payload;
      state.color[color] = !state.color[color];
    },

    // Только "избранное":
    setOnlyFavourite: (state) => {
      state.onlyFavourite = !state.onlyFavourite;
    },

    // Ресет всех фильтров:
    resetFilters: () => {
      return initialState;
    },
  },
});

// Действия:
export const {
  setDeveloper,
  setMinPrice,
  setMaxPrice,
  setStatus,
  setInvertor,
  setColor,
  setOnlyFavourite,
  resetFilters,
} = splitSystemsFilterSlice.actions;

// Слайсы состояния:
export const selectSplitSystemsFilter = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter; // весь объект с данными о фильтрах:

export const selectDevelopers = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter.developers;
export const selectPrices = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter.price;
export const selectProductStatus = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter.isInStock;
export const selectInvertorControl = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter.invertor;
export const selectColors = (state: SplitSystemsFilterState_Type) =>
  state.splitSystemsFilter.color;
export const selectOnlyFavouriteOption = (
  state: SplitSystemsFilterState_Type
) => state.splitSystemsFilter.onlyFavourite;

export default splitSystemsFilterSlice.reducer;
