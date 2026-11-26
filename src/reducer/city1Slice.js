import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objCity1: null,
  arhCities: [],

  isLoading: false,
  isError: false,
  error: '',
};

const city1Slice = createSlice({
  name: 'objCity1',
  initialState,
  reducers: {
    cityAdd: (state, action) => {
      state.objCity1 = action.payload;
      // console.log(action.payload);
    },
    cityArh: (state, action) => {
      state.arhCities = [...state.arhCities, action.payload];
      console.log(action.payload);
      console.log(state.arhCities);
    },
    reset: () => initialState,
  },
});

export const { cityArh, cityAdd, reset } = city1Slice.actions;
export default city1Slice.reducer;