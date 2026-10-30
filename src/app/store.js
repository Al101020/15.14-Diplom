// import { configureStore } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from "@reduxjs/toolkit"
// import townsReducer from './townsSlice';
import townsReducer from '../reducer/townsSlice';

// const rootReducer = combineSlices(counterSlice, quotesApiSlice, { // Пример из 15.11
//   products: productReducer,
//   todos: todosReducer,
//   users: usersReducer,
// })

const store = configureStore({
  reducer: {
    towns: townsReducer,
  },
});

export default store;
