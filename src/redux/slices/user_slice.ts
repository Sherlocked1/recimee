import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../features/core/models/user";


const initialState: UserState = {
    user: { id: 0, token: '', name: '', data: { phonenumber: '', favoriteRecipes: [], birthdate: '' } },
    isLoggedIn: false
}

type UserState = {
    isLoggedIn: boolean,
    user?: User
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<User>) => {
            state.user = payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = undefined;
        }
    }
})

const { reducer: UserReducer, actions: UserActions } = UserSlice

export { UserReducer, UserActions };