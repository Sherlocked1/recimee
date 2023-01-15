import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {UserReducer,UserActions} from "./slices/user_slice";
import { RecipesReducer } from "./slices/recipes_slice";

const rootReducer = combineReducers({
    UserReducer,
    RecipesReducer,
});


const RootStore = configureStore({reducer:{rootReducer}});

export type RootState = ReturnType<typeof RootStore.getState>
export type AppDispatch = typeof RootStore.dispatch

export default RootStore;