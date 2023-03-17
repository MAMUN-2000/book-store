import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../features/books/api/bookSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [bookSlice.reducerPath]: bookSlice.reducer,
    filterBooks: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSlice.middleware),
});
