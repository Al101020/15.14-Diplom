import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import citiesReducer from '../reducer/citiesSlice';


// //
// if (process.env.NODE_ENV === 'development') {
//   window.store = configureStore({ reducer: rootReducer });
// }
// //


const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

//
console.log(store.getState());
//

export default store;