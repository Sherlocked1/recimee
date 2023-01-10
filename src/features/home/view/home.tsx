import { FlatList, TouchableHighlight, View } from "react-native";
import styled from "styled-components/native";
import MyImage from "../../core/components/MyImage";
import StyledText from "../../core/components/MyText";
import { Colors } from "../../core/constants/constants";
import RecipeView from "../components/recipe";
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { Ingredient, IngredientsDTO } from "../../core/models/ingredient";

const ingredients: IngredientsDTO = require('../../core/data/popular_ingredients.json');
const data: Ingredient[] = ingredients.data;

const recipes:Recipe[] = require('../../core/data/recipes_detailed.json');
import { Recipe } from "../../core/models/recipe";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams, RootTabsParams } from "../../../main";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";


type TabProps = BottomTabScreenProps<RootTabsParams,'Home'>;
type Props = NavigationProp<RootStackParams>;
export default function Home({navigation,route}:TabProps) {


    const nav = useNavigation<Props>();

    const onRecipeClicked = (item:Recipe) => {
        nav.navigate('RecipeDetails',{recipe:item})
    }

    const onIngredientClicked = (name:string) => {
        console.log(name);
        navigation.navigate('Search',{query:name});
    }

    const renderIngredient = (item: Ingredient) => {
        return (
            <TouchableHighlight underlayColor={Colors.light_grey} onPress={() => { onIngredientClicked(item.name)}} style={{ paddingHorizontal: 10, borderRadius: 20 }}>
                <View>
                    <MyImage source={{ uri: item.image_url }} style={{ marginBottom: 10 }} height={100} width={80} borderRadius={10} />
                    <StyledText style={{ textAlign: 'center' }} fontSize={14} fontWeight='Medium'>{item.name}</StyledText>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 60 }}>
            <HorizontalStack>
                <Container>
                    <StyledText fontWeight='Bold' fontSize={20}>
                        Hi Mohammed Sayed,
                    </StyledText>
                    <StyledText numberOfLines={2} fontSize={16} fontWeight='SemiBold'>
                        we hope you're having a wonderful day
                    </StyledText>
                </Container>
                <MyImage height={60} width={60} isCircle={true} />
            </HorizontalStack>
            <View style={{ marginVertical: 10 }}>
                <StyledText style={{ marginHorizontal: 10 }} fontSize={20} fontWeight='Bold'>
                    Popular Ingredients
                </StyledText>
                <FlatList data={data} keyExtractor={item => item.id.toString()}
                    renderItem={(data) => renderIngredient(data.item)}
                    horizontal style={{ marginVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ marginVertical: 10, flex: 1 }}>
                <StyledText style={{ marginHorizontal: 10, marginBottom: 10 }} fontWeight='Bold' fontSize={20}>
                    Popular Recipes
                </StyledText>
                <FlatList style={{ alignSelf: 'center' }} data={recipes} keyExtractor={data => data.id.toString()}
                    renderItem={data => <RecipeView onClick={onRecipeClicked} item={data.item} />} numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

const Container = styled.View`
    flex: 1;
`

const HorizontalStack = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    padding-bottom: 0px;
`