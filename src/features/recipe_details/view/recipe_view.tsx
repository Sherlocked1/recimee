import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import { RootStackParams } from "../../../main";
import MyImage from "../../core/components/MyImage";
import StyledText from "../../core/components/MyText";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../core/constants/constants";
import { RECIPE_IMAGE_URL } from "../../core/API/api";
import { useEffect, useState } from "react";
import ActiveButton from "../components/active_button";
import RenderHTML from "react-native-render-html";
import { getTimeStringOf } from "../../core/utils/utils";

type Props = NativeStackScreenProps<RootStackParams, 'RecipeDetails'>
const RecipeDetailView = ({ navigation, route }: Props) => {
    const recipe = route.params.recipe

    const { width, height } = useWindowDimensions();

    const [currentTab, setCurrentTab] = useState<'Details' | 'Recipe'>('Details');

    useEffect(() => {
        navigation.setOptions({ title: recipe.title })
    }, [])

    const changeTabTo = (title: any) => {
        setCurrentTab(title);
    }

    const getStyledHtmlText = (text: string): string => {
        const styledText = `
            <p style="color:white;">
            ${text}
            </p>
        `
        return styledText
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>
                <MyImage style={{ resizeMode: 'cover' }} source={{ uri: recipe.image }}
                    width={width} height={height * 0.4} borderRadius={10} />

                <HorizontalContainer style={{ padding: 10 }}>
                    <StyledText numberOfLines={2} fontWeight="Bold" fontSize={16} style={{ flex: 1 }}>{recipe.title}</StyledText>
                    <HorizontalContainer>
                        <HorizontalContainer style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                            <Ionicons name='time-outline' size={30} color={Colors.secondary} />
                            <StyledText fontWeight="Bold" fontSize={16} numberOfLines={2}>{getTimeStringOf(recipe.readyInMinutes)}</StyledText>
                        </HorizontalContainer>
                        <HorizontalContainer style={{ alignItems: 'center' }}>
                            <Ionicons name='arrow-up' color={Colors.secondary} size={30} />
                            <StyledText fontSize={16} fontWeight='Bold'>{recipe.aggregateLikes}</StyledText>
                        </HorizontalContainer>
                    </HorizontalContainer>
                </HorizontalContainer>


                <View>
                    <StyledText style={{ marginVertical: 5, paddingHorizontal: 10 }} fontWeight="Medium" fontSize={18}>Ingredients:</StyledText>
                    <HorizontalScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {recipe.extendedIngredients.map((ingredient, index) =>
                            <View key={index} style={{ marginHorizontal: 10 }}>
                                <MyImage source={{ uri: `${RECIPE_IMAGE_URL}${ingredient.image}` }} height={60} width={50} borderRadius={10} />
                                <StyledText numberOfLines={2} style={{ width: 50, textAlign: 'center', marginTop: 5 }} fontSize={12} fontWeight='Regular'>{ingredient.name}</StyledText>
                            </View>
                        )}
                    </HorizontalScrollView>
                    <HorizontalContainer style={{ paddingHorizontal: 10, justifyContent: 'flex-start', marginTop: 20 }}>
                        <ActiveButton title='Details' isActive={currentTab == 'Details'}
                            activeColor={Colors.accent} inActiveColor={'grey'}
                            onPress={changeTabTo}
                        />
                        <ActiveButton title='Recipe' isActive={currentTab == 'Recipe'}
                            activeColor={Colors.accent} inActiveColor={'grey'}
                            onPress={changeTabTo}
                        />
                    </HorizontalContainer>
                </View>

                {
                    currentTab == 'Details' &&
                    <View style={{ paddingHorizontal: 10 }}>
                        <RenderHTML
                            contentWidth={width}
                            source={{ html: getStyledHtmlText(recipe.summary), }}
                        />
                    </View>
                }

                {
                    currentTab == 'Recipe' &&
                    <>
                        {
                            recipe.analyzedInstructions.length == 0 &&
                            <StyledText fontSize={14} fontWeight='Bold'>{recipe.instructions}</StyledText>
                        }
                        {
                            recipe.analyzedInstructions.length != 0 &&
                            <View>
                                {
                                    recipe.analyzedInstructions.map(instruction =>
                                        instruction.steps.map((step,key) =>
                                            <View key={key} style={{ padding: 10,marginVertical:10, backgroundColor: Colors.light_grey, borderRadius: 10 }}>
                                                <StyledText fontSize={14} fontWeight='Medium'>{step.step}</StyledText>
                                            </View>
                                        )
                                    )
                                }
                            </View>
                        }
                        {
                            (recipe.instructions == '' && recipe.analyzedInstructions.length == 0) &&
                            <StyledText style={{ paddingHorizontal: 10 }} fontSize={14} fontWeight='ExtraLight'>
                                No instructions available
                            </StyledText>
                        }

                    </>
                }


            </ScrollView>
        </SafeAreaView>
    )

}


const HorizontalScrollView = styled.ScrollView`
    flex-direction: row;
`
const HorizontalContainer = styled.View`
    margin:5px 0px;
    flex-direction: row;
    justify-content: space-between;
`

export default RecipeDetailView;