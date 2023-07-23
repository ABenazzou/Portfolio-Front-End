import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   colors: {
//     header: "#ebfbff",
//     body: "#fff",
//     footer: "#003333",
//   },

  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
    //   state.colors.header = "#324B50";
    //   state.colors.body = "#445155";
      state.darkmode = true;
    },
    setLightTheme(state) {
    //   state.colors.header = "#ebfbff";
    //   state.colors.body = "#fff";
      state.darkmode = false;
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
