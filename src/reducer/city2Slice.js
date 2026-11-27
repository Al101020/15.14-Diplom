import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objCity2: null,
  arhCities: [],

  isLoading: false,
  isError: false,
  error: '',
};

const city2Slice = createSlice({
  name: 'objCity2',
  initialState,
  reducers: {
    cityAdd: (state, action) => {
      state.objCity2 = action.payload;
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

export const { cityArh, cityAdd, reset } = city2Slice.actions;
export default city2Slice.reducer;