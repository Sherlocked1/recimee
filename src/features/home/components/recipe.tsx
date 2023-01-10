import { StyleSheet, Text, useWindowDimensions, View } from "react-native"
import MyImage from "../../core/components/MyImage"
import StyledText from "../../core/components/MyText"
import { Colors } from "../../core/constants/constants"
import { AbstractRecipe, Recipe } from "../../core/models/recipe"
import { Rating, AirbnbRating } from 'react-native-ratings';
import { getTimeStringOf } from "../../core/utils/utils"


type RecipeViewProps = {
    item: AbstractRecipe
}


const RecipeView = (props: RecipeViewProps) => {
    const { width } = useWindowDimensions();
    
    return (
        <View style={{ width: width * 0.4, marginHorizontal: width * 0.05 }}>
            <View style={{ alignItems: 'center' }}>
                <MyImage style={styles.image} height={80} width={80} isCircle />
                <View style={styles.detailsView}>
                    <StyledText fontSize={16} fontWeight='Medium'
                        style={{ textAlign: 'center' }}
                    >
                        {props.item.title}
                    </StyledText>

                    <AirbnbRating
                        showRating={false}
                        size={20}
                        defaultRating={5}
                        isDisabled
                    />

                    <StyledText fontSize={14} fontWeight='ExtraLight'
                        style={{ textAlign: 'center' }}
                    >
                        {getTimeStringOf(90)}
                    </StyledText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsView: {
        paddingBottom: 20,
        paddingTop: 60,
        marginTop: 40,
        marginBottom: 10,
        borderRadius: 10,
        width: '100%',
        backgroundColor: Colors.light_grey
    },
    image: {
        position: 'absolute', zIndex: 1, top: 0,
        borderColor: Colors.secondary,
        borderWidth: 0.1,
    }
})

export default RecipeView;