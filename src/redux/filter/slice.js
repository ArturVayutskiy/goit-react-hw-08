import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeNumberFilter(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilter, changeNumberFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
