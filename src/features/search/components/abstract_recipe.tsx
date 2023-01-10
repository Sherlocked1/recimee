import { useWindowDimensions } from "react-native"
import styled from "styled-components/native";
import StyledText from "../../core/components/MyText";
import { Colors } from "../../core/constants/constants";
import { AbstractRecipe, Recipe } from "../../core/models/recipe"

export const AbstractRecipeView = (props: AbstractRecipeViewProps) => {

    const { width } = useWindowDimensions();

    const Container = styled.TouchableOpacity`
        width: ${width * 0.4}px;
        padding: 4px;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.light_grey};
        border-radius: 10px;
        margin: 5px;
    `

    return (
        <Container onPress={props.onClick}>
            <StyledText fontSize={14} fontWeight='Bold' style={{ textAlign: 'center' }}>
                {props.recipe.title}
            </StyledText>
        </Container>
    )

}



export type AbstractRecipeViewProps = {
    recipe: AbstractRecipe,
    onClick: ()=>void
}