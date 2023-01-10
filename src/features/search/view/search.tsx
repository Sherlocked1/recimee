import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native"
import styled from "styled-components/native";
import { MyField } from "../../core/components/MyTextfield";
import { Colors } from "../../core/constants/constants";
import { AbstractRecipe, AbstractRecipesDTO, Recipe } from "../../core/models/recipe";
import { AbstractRecipeView } from "../components/abstract_recipe";
import useSearchController from "../controller/search_controller";

const SearchView = () => {

    var data: AbstractRecipe[] = []

    const fdata: AbstractRecipesDTO = require('../../core/data/recipes.json');
    data = fdata.results;
    var detailed_recipes: Recipe[] = require('../../core/data/recipes_detailed.json')

    const { recipes, searchQuery, onChangeText, onSubmitQuery, onItemClick, isLoading } = useSearchController();

    return (
        <>
            {isLoading &&
                <LoadingContainer>
                    <ActivityIndicator color={Colors.primary} />
                </LoadingContainer>
            }
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
                    <FlatList data={recipes} renderItem={item => <AbstractRecipeView onClick={() => onItemClick(item.item.id)} recipe={item.item} />}
                        numColumns={2} contentContainerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
                    />
                </RecipesContainer>
            </SafeAreaView>
        </>
    )
}

const LoadingContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${Colors.secondary};
    opacity: 0.3;
    justify-content: center;
    align-items: center;
    filter: blur();
`

const RecipesContainer = styled.View`
    padding: 20px 20px 80px 20px;
    flex: 1;
`

export default SearchView;