import { configureStore } from "@reduxjs/toolkit";
import userReducer from "~store/slices/userSlice";
import modalReducer from "~store/slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
