import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  showArchives: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    showArchives: (state) => {
      state.showArchives = true;
    },
    hideArchives: (state) => {
      state.showArchives = false;
    },
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { showArchives, hideArchives, toggleMode } = globalSlice.actions;
export default globalSlice.reducer;
