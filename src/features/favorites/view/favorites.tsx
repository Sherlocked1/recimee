import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { FlatList, SafeAreaView } from "react-native"
import styled from "styled-components/native"
import { RootStackParams, RootTabsParams } from "../../../main"
import { useAppSelector } from "../../../redux/hooks"
import MyImage from "../../core/components/MyImage"
import StyledText from "../../core/components/MyText"
import { Colors } from "../../core/constants/constants"
import { Recipe } from "../../core/models/recipe"

type Props = BottomTabScreenProps<RootTabsParams,'Favorites'>
type StackProps = NativeStackNavigationProp<RootStackParams, 'Tabs'>

const Favorites = ({ navigation, route }: Props) => {

    const recieps: Recipe[] = useAppSelector((state)=>state.rootReducer.RecipesReducer.favoriteRecipes);
    const nav = useNavigation<StackProps>();

    const navigateToItem = (item: Recipe) => {
        nav.navigate('RecipeDetails', { recipe: item })
    }
    const favItem = (item: Recipe) => {
        return (
            <ItemContainer onPress={() => navigateToItem(item)}>
                <StyledText numberOfLines={2} fontSize={18} fontWeight='Bold' style={{ flex: 1 }}>
                    {item.title}
                </StyledText>
                <MyImage source={{ uri: item.image }} height={60} width={60} borderRadius={10} />
            </ItemContainer>
        )
    }
    return (
        <SafeAreaView>
            <FlatList data={recieps} keyExtractor={(item) => item.id.toString()} renderItem={(data) => favItem(data.item)} />
        </SafeAreaView>
    )
}

const ItemContainer = styled.TouchableOpacity`
    background-color    :${Colors.light_grey};
    border-radius: 15px;
    margin: 10px 10px;
    flex-direction: row;
    padding:  10px 20px;
`

export default Favorites