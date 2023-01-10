import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParams } from "../../../main";
import { AbstractRecipe, Recipe } from "../../core/models/recipe";
import useSearchViewModel from "../view_models/search_viewmodel";

type Props = NativeStackNavigationProp<RootStackParams,'Tabs'>

const useSearchController = () => {

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [recipes,setRecipes] = useState<AbstractRecipe[]>([]);

    const navigation = useNavigation<Props>()

    const {getRecipesForQuery,getRecipesDetailsForId} = useSearchViewModel();
 
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeText = (text:string) => {
        setSearchQuery(text)
    }

    const onSubmitQuery = async () => {
        setIsLoading(true);
        const recipes = await getRecipesForQuery(searchQuery);
        setIsLoading(false);
        setRecipes(recipes);
    }


    const onItemClick = async (id:number) => {
        setIsLoading(true);
        const data = await getRecipesDetailsForId(id);
        console.log('item data :::: ',data);
        setIsLoading(false);
        navigation.navigate('RecipeDetails',{recipe:data});
    }

    return {
        searchQuery,
        onChangeText,
        onSubmitQuery,
        onItemClick,
        isLoading,
        recipes,
    }
}

export default useSearchController;