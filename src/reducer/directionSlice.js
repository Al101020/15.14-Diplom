import { createSlice } from '@reduxjs/toolkit';
import fetchCity from '../api/fetchCity';
import fetchDirection from '../api/fetchDirection';

const initialState = {
  direction: [],
  isLoading: false,
  isError: false,
  error: '',
};

const directionSlice = createSlice({
  name: 'directionSearch',
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    },
    directionArr: (state, action) => {
      state.direction = action.payload;
      console.log(action.payload);
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchDirection.pending, (state) => {        // console.log('Обработка начала загрузки (pending)');
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchDirection.fulfilled, (state, action) => {        // console.log('Обработка успешной загрузки (fulfilled)');
        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        state.direction = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchDirection.rejected, (state, action) => {
        console.log('Обработка ошибки (rejected)');
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { clearError, directionArr, reset } = directionSlice.actions;
export default directionSlice.reducer;