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
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
