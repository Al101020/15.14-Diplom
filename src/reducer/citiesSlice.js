// import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: null,
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
    citiesArr: (state, action) => {
      state.cities = action.payload;
      // console.log(state);
      // console.log(state.cities);
      // console.log(state);
    },
  }
});
export const { clearError, citiesArr } = citiesSlice.actions;
export default citiesSlice.reducer;