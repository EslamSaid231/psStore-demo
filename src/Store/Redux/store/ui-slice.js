import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    Notification: null,
    NotificationIsVisible: true,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    NotificationIsVisible(state) {
      state.NotificationIsVisible = !state.NotificationIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
