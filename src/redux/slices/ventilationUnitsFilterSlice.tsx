import { createSlice } from '@reduxjs/toolkit';

interface ventilationUnitsFilterState_Type {
  ventilationUnitsFilter: {
    developer: boolean;
    price: {
      minPrice: number;
      maxPrice: number;
    };
    isInStock: boolean;
    heater: {
      water: boolean;
      electric: boolean;
    };
    recup: boolean;
    onlyFavourite: boolean;
  };
}

const initialState = {
  developer: false,
  price: {
    minPrice: 126175,
    maxPrice: 289750,
  },
  isInStock: false,
  heater: {
    water: false,
    electric: false,
  },
  recup: false,
  onlyFavourite: false,
};

const ventilationUnitsFilterSlice = createSlice({
  name: 'ventilationUnitsFilter',
  initialState: initialState,
  reducers: {
    // Производитель:
    setDeveloper: (state) => {
      state.developer = !state.developer;
    },

    // Цена:
    setPrice: (
      state,
      action: {
        payload: { priceType: string; priceValue: string };
        type: string;
      }
    ) => {
      const { priceType, priceValue } = action.payload;
      state.price[priceType] = priceValue;
    },

    // Наличие:
    setIsInStock: (state) => {
      state.isInStock = !state.isInStock;
    },

    // Нагреватель:
    setHeater: (state, action: { payload: string; type: string }) => {
      state.heater[action.payload] = !state.heater[action.payload];
    },

    // Рекуператор:
    setRecup: (state) => {
      state.recup = !state.recup;
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
  setPrice,
  setIsInStock,
  setHeater,
  setRecup,
  setOnlyFavourite,
  resetFilters,
} = ventilationUnitsFilterSlice.actions;

// Слайс состояния:
export const selectVentilationUnitsFilter = (
  state: ventilationUnitsFilterState_Type
) => state.ventilationUnitsFilter;

export default ventilationUnitsFilterSlice.reducer;
