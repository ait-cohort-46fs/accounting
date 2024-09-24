import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/type";
import { fetchUser, registerUser, updateUser } from "../api/accountApi";

// TODO add to reducers updateUser
const userSlice = createSlice({
    name: "user",
    initialState: {} as UserProfile,
    reducers: {
        putUser: (_state, action) => action.payload,
        deleteUser: () => ({} as UserProfile)
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (_state, action) => action.payload.user)
            .addCase(fetchUser.fulfilled, (_state, action) => action.payload.user)
            .addCase(updateUser.fulfilled, (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName
            })
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;