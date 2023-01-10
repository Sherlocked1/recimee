import { FlatList, SafeAreaView } from "react-native"
import styled from "styled-components/native";
import { MyField } from "../../core/components/MyTextfield";
import { Colors } from "../../core/constants/constants";
import { AbstractRecipe, AbstractRecipesDTO, Recipe } from "../../core/models/recipe";
import { AbstractRecipeView } from "../components/abstract_recipe";
import useSearchController from "../controller/search_controller";

const SearchView = () => {

    var data: AbstractRecipe[] = []
    const fdata:AbstractRecipesDTO = require('../../core/data/recipes.json');

    data = fdata.results;

    var recipes:Recipe[] = require('../../core/data/recipes_detailed.json')


    const {searchQuery,onChangeText,onSubmitQuery,onItemClick} = useSearchController();
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyField icon={{ name: 'search', size: 30 }}
                onChangeText={onChangeText} placeholder='Search'
                onSubmitEditing={onSubmitQuery}
                textColor={Colors.secondary}
                value={searchQuery}
                style={
                    {
                        backgroundColor: Colors.light_grey,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        padding: 10
                    }
                }
            />

            <RecipesContainer>
                {/* <ActivityIndicator/> */}
                <FlatList data={data} renderItem={item => <AbstractRecipeView onClick={()=>onItemClick(recipes[1])} recipe={item.item} />}
                    numColumns={2} contentContainerStyle={{width:'100%',alignItems:'center'}}
                />
            </RecipesContainer>
        </SafeAreaView>
    )
}

const RecipesContainer = styled.View`
    padding: 20px 20px 80px 20px;
    flex: 1;
`

export default SearchView;