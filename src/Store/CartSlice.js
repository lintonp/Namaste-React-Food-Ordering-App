import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemsIds: {},
  },
  reducers: {
    addItem: (state, action) => {
      if (state.itemsIds[action.payload.id] === undefined) {
        state.itemsIds[action.payload.id] = 1;
        state.items.push(action.payload);
      } else {
        state.itemsIds[action.payload.id] += 1;
      }
    },
    removeItem: (state, action) => {
      if (state.itemsIds.hasOwnProperty(action.payload)) {
        console.log("hasOwnProperty");
        if (state.itemsIds[action.payload] === 1) {
          delete state.itemsIds[action.payload];
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else {
          state.itemsIds[action.payload] -= 1;
        }
      } else {
        console.log("does not hasOwnProperty");
      }
    },
    clearItem: (state, action) => {
      delete state.itemsIds[action.payload];
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // clearCart: (state) => {
    //   state.items.length = 0;
    // },
    //originalState = {items["pizza"]}
    clearCart: (state) => {
      //RTK - either mutate the existing state or return a new state
      //state.items.length = 0; //originalState = []
      return { items: [] }; //this new [] will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
