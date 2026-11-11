// import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import fetchCity from '../api/fetchCity';

const initialState = {
  cities: [],
  isLoading: false,
  isError: false,
  error: '',
};

const citiesSlice = createSlice({
  // name: 'cities',
  name: 'citiesSearch',
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    },
    citiesArr: (state, action) => {
      state.cities = action.payload;
      console.log(action.payload);
      // console.log(state.cities);
      // console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchCity.pending, (state) => {
        console.log('Обработка начала загрузки (pending)');
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchCity.fulfilled, (state, action) => {
        console.log('Обработка успешной загрузки (fulfilled)');
        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        state.cities = action.payload.Search;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchCity.rejected, (state, action) => {
        console.log('Обработка ошибки (rejected)');
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});
export const { clearError, citiesArr } = citiesSlice.actions;
export default citiesSlice.reducer;