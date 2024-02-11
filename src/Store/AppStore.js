import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";
import ErrorSlice from "./ErrorSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    error: ErrorSlice,
  },
});

export default appStore;
