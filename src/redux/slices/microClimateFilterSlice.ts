import { createSlice } from '@reduxjs/toolkit';

interface microClimateFilterState_Type {
  microClimateFilter: {
    developers: {
      ballu: boolean;
      boneco: boolean;
      zanussi: boolean;
    };
    price: {
      minPrice: number;
      maxPrice: number;
    };
    isInStock: boolean;
    effectiveArea: number;
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
    boneco: false,
    zanussi: false,
  },
  price: {
    minPrice: 10250,
    maxPrice: 22130,
  },
  isInStock: false,
  effectiveArea: 100,
  color: {
    white: false,
    black: false,
  },
  onlyFavourite: false,
};

const microClimateFilterSlice = createSlice({
  name: 'microClimateFilter',
  initialState: initialState,
  reducers: {
    setDeveloper: (state, action: { payload: string; type: string }) => {
      state.developers[action.payload] = !state.developers[action.payload];
    },

    setPrice: (
      state,
      action: { payload: { priceType: string; price: string }; type: string }
    ) => {
      const { priceType, price } = action.payload;
      state.price[priceType] = price;
    },

    setIsInStock: (state) => {
      state.isInStock = !state.isInStock;
    },

    setEffectiveArea: (state, action) => {
      state.effectiveArea = action.payload;
    },

    setColor: (state, action: { payload: string; type: string }) => {
      state.color[action.payload] = !state.color[action.payload];
    },

    setOnlyFavourite: (state) => {
      state.onlyFavourite = !state.onlyFavourite;
    },

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
  setEffectiveArea,
  setColor,
  setOnlyFavourite,
  resetFilters,
} = microClimateFilterSlice.actions;

// Слайс состояния:
export const selectMicroclimateFilter = (state: microClimateFilterState_Type) =>
  state.microClimateFilter;

export default microClimateFilterSlice.reducer;
