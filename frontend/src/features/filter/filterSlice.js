import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  search: "",
  booksList: [],
  all: false,
  featured: false,
};

const filterSlice = createSlice({
  name: "filterBooks",
  initialState,
  reducers: {
    getBooks(state, action) {
      state.booksList = action.payload;
    },
    getSearchValue(state, action) {
      state.search = action.payload;
      state.booksList = action.payload;
    },
    getAll(state, action) {
      //   state.booksList = state.booksList.filter(
      //     (book) => book.featured === true
      //   );
    },
    getFeatured(state, action) {
      state.booksList = state.booksList.filter(
        (book) => book.featured !== false
      );
    },
  },
});

export default filterSlice.reducer;
export const { getBooks, getSearchValue, getAll, getFeatured } =
  filterSlice.actions;
