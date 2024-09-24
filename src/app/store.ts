import { configureStore } from "@reduxjs/toolkit";
import token from "../features/slices/tokenSlice";
import user from "../features/slices/userSlice";

export const store = configureStore({
    reducer: {
        user, token
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store