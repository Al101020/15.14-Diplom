import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import townsReducer from '../reducer/townsSlice';

const rootReducer = combineReducers({
  towns: townsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
//
console.log(store.getState());
//


export default store;

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { combineSlices, configureStore } from "@reduxjs/toolkit"
// import townsReducer from './townsSlice';

// const rootReducer = combineSlices(counterSlice, quotesApiSlice, { // Пример из 15.11
//   products: productReducer,
//   todos: todosReducer,
//   users: usersReducer,
// })
