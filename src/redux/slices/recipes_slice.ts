import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../features/core/models/recipe";


const initialState:RecipesState = {
    recipes:[],
    favoriteRecipes:[]
}

type RecipesState = {
    recipes:Recipe[],
    favoriteRecipes:Recipe[]
}

const RecipesSlice = createSlice({
    name:"recipes",
    initialState,
    reducers:{
        removeFromFavorites:(state,{payload}:PayloadAction<Recipe>)=> {
            state.favoriteRecipes = state.favoriteRecipes.filter((el) => el.id !== payload.id);
        },
        addToFavorites:(state,{payload}:PayloadAction<Recipe>)=> {
            state.favoriteRecipes.push(payload);
        },
    }
})

const {reducer : RecipesReducer,actions: RecipesActions} = RecipesSlice

export {RecipesReducer,RecipesActions};