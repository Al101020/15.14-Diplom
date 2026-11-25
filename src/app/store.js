// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import citiesReducer from '../reducer/citiesSlice';
import directionReducer from '../reducer/directionSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    direction: directionReducer,
  },
});

//
// console.log(store.getState());
//

export default store;