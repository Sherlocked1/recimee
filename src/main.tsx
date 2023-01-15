import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Login from "./features/auth/login/view/login";
import SignUp from "./features/auth/signup/view/signup";
import { Colors, MyTheme } from "./features/core/constants/constants";
import { Recipe } from "./features/core/models/recipe";
import RecipeDetailView from "./features/recipe_details/view/recipe_view";
import TabsView from "./tabs";

const Main = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} component={Login} name='Login' />
                    <Stack.Screen options={stackHeaderOptions} component={SignUp} name='Signup' />
                    <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} component={TabsView} name='Tabs' />
                    <Stack.Screen options={stackHeaderOptions} component={RecipeDetailView} name='RecipeDetails' />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const stackHeaderOptions: StackNavigationOptions | ((props: {
    route: RouteProp<RootStackParams, 'Signup' | 'RecipeDetails'>;
    navigation: any;
}) => StackNavigationOptions) = {
    headerStyle: { backgroundColor: Colors.light_grey, },
    headerTitleStyle: { color: Colors.secondary },
    headerBackTitleStyle: { color: Colors.secondary },
    headerTintColor: Colors.secondary
}

export type RootTabsParams = {
    Home: undefined,
    Search: { query?: string },
    Settings: undefined,
    Favorites: undefined
}

export type RootStackParams = {
    Signup: undefined,
    Login: undefined,
    Tabs: undefined,
    RecipeDetails: { recipe: Recipe },
}

export default Main;