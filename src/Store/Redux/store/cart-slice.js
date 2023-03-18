import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    itemsPrice: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.totalPrice += newitem.price;
      state.itemsPrice += newitem.price;
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
      state.totalPrice -= price;
      state.itemsPrice -= price;
      existingItem.totalPrice = existingItem.totalPrice - price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
