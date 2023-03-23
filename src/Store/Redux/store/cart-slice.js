import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    itemsPrice: 0,
    totalPrice: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.totalPrice += newitem.price;
      state.itemsPrice += newitem.price;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          image: newitem.image,
          id: newitem.id,
          name: newitem.name,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newitem.price;
      }
    },
    removeItemFromCart(state, action) {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      state.itemsPrice -= existingItem.price;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        existingItem.totalPrice = existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      if (state.itemsPrice < 0) {
        state.itemsPrice = 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
