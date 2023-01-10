import {API_KEY, BASE_URL, SEARCH_RECIPE} from '../../core/API/api';
import { AbstractRecipe,AbstractRecipesDTO, Recipe } from '../../core/models/recipe';

const useSearchViewModel = () => {

    const getRecipesForQuery = async (query:string):Promise<AbstractRecipe[]> => {
        const url = `${SEARCH_RECIPE}&&query=${query}`
        console.log('url',url);
        const data:AbstractRecipesDTO = await fetch(url).then(res=>res.json()).catch(err=>console.log(err));
        return data.results;
    }

    const getRecipesDetailsForId = async (id:number):Promise<Recipe> => {
        // https://api.spoonacular.com/recipes/{id}/information
        const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
        console.log(url)
        const data:Recipe = await fetch(url).then(res=>res.json()).catch(err=>console.log(err));
        console.log(data);
        return data;
    }


    return {
        getRecipesForQuery,
        getRecipesDetailsForId
    }
}

export default useSearchViewModel;