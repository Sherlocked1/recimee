import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../core/models/user";

const initialState:UserState = {
    user:{},
    isLoggedIn:false
}

type UserState = {
    isLoggedIn:boolean,
    user:object
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,{payload}:PayloadAction<User>)=> {
            state.user = payload;
            state.isLoggedIn = true;
        },
        logout:(state)=> {
            state.isLoggedIn = false;
            state.user = {};
        }
    }
})

const {reducer : UserReducer,actions: UserActions} = UserSlice

export {UserReducer,UserActions};