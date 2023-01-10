import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native"
import MyImage from "../../core/components/MyImage"
import StyledText from "../../core/components/MyText"
import { Colors } from "../../core/constants/constants"
import { Recipe } from "../../core/models/recipe"
import { getTimeStringOf } from "../../core/utils/utils"


type RecipeViewProps = {
    item: Recipe,
    onClick:(item:Recipe)=>void
}

const RecipeView = (props: RecipeViewProps) => {
    const { width } = useWindowDimensions();
    
    return (
        <TouchableOpacity onPress={()=>props.onClick(props.item)} style={{ width: width * 0.4, marginHorizontal: width * 0.05 }}>
            <View style={{ alignItems: 'center' }}>
                <MyImage source={{uri:props.item.image}} style={styles.image} height={80} width={80} isCircle />
                <View style={styles.detailsView}>
                    <StyledText fontSize={16} fontWeight='Medium'
                        style={{ textAlign: 'center' }}
                    >
                        {props.item.title}
                    </StyledText>

                    <StyledText fontSize={14} fontWeight='ExtraLight'
                        style={{ textAlign: 'center' }}
                    >
                        {getTimeStringOf(props.item.readyInMinutes)}
                    </StyledText>
                </View>
            </View>
        </TouchableOpacity>
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