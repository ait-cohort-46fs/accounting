import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/type";

// TODO add to reducers updateUser
const userSlice = createSlice({
    name: "user",
    initialState: {} as UserProfile,
    reducers: {
        putUser: (_state, action) => action.payload,
        deleteUser: () => ({} as UserProfile)
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;