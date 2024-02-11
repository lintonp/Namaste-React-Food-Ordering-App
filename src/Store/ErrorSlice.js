import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "Error",
  initialState: {
    isError: false,
    errorMessage: "",
    errorDescription: "",
  },
  reducers: {
    addError: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload.message;
      state.errorDescription = action.payload.description;
    },
    resolveError: (state) => {
      state.isError = false;
      state.errorMessage = "";
      state.errorDescription = "";
    },
  },
});

export const { addError, resolveError } = errorSlice.actions;
export default errorSlice.reducer;
