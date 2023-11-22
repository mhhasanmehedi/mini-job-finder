const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  sorting: "default",
  search: "",
};

// create slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.sorting = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeSort, changeSearch } = filterSlice.actions;
export default filterSlice.reducer;
