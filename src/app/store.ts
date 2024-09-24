import { configureStore } from "@reduxjs/toolkit";
import token from "../features/slices/tokenSlice";
import user from "../features/slices/userSlice";
import { UserProfile } from "../utils/type";

const preloadedState = JSON.parse(localStorage.getItem('state') ?? '{}') as {user: UserProfile, token: string};

export const store = configureStore({
    reducer: {
        user, token
    },
    preloadedState
})

store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())));

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store