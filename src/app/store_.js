import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Здесь ключи — это имена частей состояния, а значения — редьюсеры соответствующих слайсов
    // counter: counterReducer, // например, для счётчика
    // другие части: todos: todosReducer,
    // users: usersReducer,
  },
});