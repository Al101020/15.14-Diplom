// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import citiesReducer from '../reducer/citiesSlice';
import directionReducer from '../reducer/directionSlice';
import city1Reducer from '../reducer/city1Slice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    direction: directionReducer,
    objCity1: city1Reducer,
  },
});

//
// console.log(store.getState());
//

export default store;