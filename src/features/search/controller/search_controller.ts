import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { RootStackParams } from "../../../main";
import { Recipe } from "../../core/models/recipe";
import useSearchViewModel from "../view_models/search_viewmodel";

const useSearchController = () => {
    
    const navigation = useNavigation<RootStackParams>()

    const {callAPI} = useSearchViewModel();
 
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeText = (text:string) => {
        setSearchQuery(text)
    }

    const onSubmitQuery = () => {
        callAPI(searchQuery);
    }


    const onItemClick = (item:Recipe) => {
        console.log(item.title)

    }

    return {
        searchQuery,
        onChangeText,
        onSubmitQuery,
        onItemClick,
    }
}

export default useSearchController;