import { configureStore } from "@reduxjs/toolkit";
import User from "./slices/userSlice";

const store = configureStore({
 reducer: {
  User: User,
 },
});

export default store;