import { StyleSheet, Text, useWindowDimensions, View } from "react-native"
import MyImage from "../../core/components/MyImage"
import StyledText from "../../core/components/MyText"
import { Colors } from "../../core/constants/constants"
import { Recipe } from "../../core/models/recipe"
import { Rating, AirbnbRating } from 'react-native-ratings';


type RecipeViewProps = {
    item: Recipe
}


const RecipeView = (props: RecipeViewProps) => {
    const { width } = useWindowDimensions();

    const getTimeStringOf = (minutes: number): string => {
        var hours = Math.floor(minutes / 60);
        var mins = minutes % 60;

        return hours + ":" + mins;
    }

    return (
        <View style={{ width: width * 0.4, marginHorizontal: width * 0.05 }}>
            <View style={{ alignItems: 'center' }}>
                <MyImage style={styles.image} height={80} width={80} isCircle />
                <View style={styles.detailsView}>
                    <StyledText fontSize={16} fontWeight='Medium'
                        style={{ textAlign: 'center' }}
                    >
                        {props.item.name}
                    </StyledText>

                    <AirbnbRating 
                    showRating={false}
                    size={20}
                    defaultRating={props.item.rating}
                    isDisabled
                    />

                    <StyledText fontSize={14} fontWeight='ExtraLight'
                        style={{ textAlign: 'center' }}
                    >
                        {getTimeStringOf(props.item.time)}
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
        position: 'absolute', zIndex: 1, top: 0 ,
        borderColor:Colors.secondary,
        borderWidth:0.1,
    }
})

export default RecipeView;