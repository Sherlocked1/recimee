import { FlatList, TouchableHighlight, View } from "react-native";
import styled from "styled-components/native";
import MyImage from "../../core/components/MyImage";
import StyledText from "../../core/components/MyText";
import { Colors } from "../../core/constants/constants";
import { Recipe } from "../../core/models/recipe";
import RecipeView from "../components/recipe";
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import Constants from "expo-constants";

const data = [
    'chicken',
    'cheese',
    'fish',
    'salad',
];

const recipes: Recipe[] = [
    { id: 1, name: 'Chicken meat', image: '', rating: 4, time: 30 },
    { id: 2, name: 'Chicken meat', image: '', rating: 4, time: 30 },
    { id: 3, name: 'Chicken meat', image: '', rating: 2, time: 30 },
    { id: 4, name: 'Chicken meat', image: '', rating: 4, time: 90 },
]

const renderIngredient = (item: string) => {
    return (
        <TouchableHighlight underlayColor={Colors.light_grey} onPress={() => { }} style={{ paddingHorizontal: 10, borderRadius: 20 }}>
            <View>
                <MyImage style={{ marginBottom: 10 }} height={100} width={80} borderRadius={10} />
                <StyledText style={{ textAlign: 'center' }} fontSize={14} fontWeight='Medium'>{item}</StyledText>
            </View>
        </TouchableHighlight>
    )
}

export default function Home() {
    return (
        <SafeAreaView style={{flex:1,paddingBottom:60}}>
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
                <FlatList data={data} keyExtractor={item => item}
                    renderItem={(data) => renderIngredient(data.item)}
                    horizontal style={{ marginVertical: 10 }} 
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ marginVertical: 10,flex:1}}>
                <StyledText style={{ marginHorizontal: 10,marginBottom:10 }} fontWeight='Bold' fontSize={20}>
                    Popular Recipes
                </StyledText>
                <FlatList style={{ alignSelf: 'center'}} data={recipes} keyExtractor={data => data.id.toString()}
                    renderItem={data => <RecipeView item={data.item} />} numColumns={2}
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