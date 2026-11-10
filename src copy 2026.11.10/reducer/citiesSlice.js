// import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  isLoading: false,
  isError: false,
  error: '',
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    },
    cities: (state, action) => {
      state.cities = action.payload;
    },
  }
});
export const { clearError, cities } = citiesSlice.actions;
export default citiesSlice.reducer;