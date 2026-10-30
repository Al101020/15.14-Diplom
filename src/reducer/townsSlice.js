import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  towns: [],
  isError: false,
  error: '',
};

const townsSlice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    },
    towns: (state, action) => {
      state.towns = action.payload;
    },
  }
});
export const { clearError, towns } = townsSlice.actions;
export default townsSlice;