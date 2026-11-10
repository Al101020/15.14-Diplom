import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import citiesReducer from '../reducer/citiesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

//
console.log(store.getState());
//

export default store;
