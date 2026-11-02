import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import townsReducer from '../reducer/townsSlice';

const store = configureStore({
  reducer: {
    towns: townsReducer,
  },
});

//
console.log(store.getState());
//

export default store;
