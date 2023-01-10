import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, View } from "react-native";
import { Colors, MyTheme } from "./features/core/constants/constants";
import { TabOptions } from "./features/core/constants/tab_style";
import { Recipe } from "./features/core/models/recipe";
import Home from "./features/home/view/home";
import RecipeDetailView from "./features/recipe_details/view/recipe_view";
import SearchView from "./features/search/view/search";
import SettingsView from "./features/settings/view/settings";
import TabsView from "./tabs";

const Main = () => {

    const Tab = createBottomTabNavigator<RootTabsParams>();
    const Stack = createStackNavigator<RootStackParams>();

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} component={TabsView} name='Tabs' />
                    <Stack.Screen options={
                        {
                            headerStyle: { backgroundColor: Colors.light_grey, },
                            headerTitleStyle:{color:Colors.secondary},
                            headerBackTitleStyle:{color:Colors.secondary},
                            headerTintColor:Colors.secondary
                        }
                    } component={RecipeDetailView} name='RecipeDetails' />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export type RootTabsParams = {
    Home: undefined,
    Search: undefined,
    Settings: undefined
}

export type RootStackParams = {
    Tabs: undefined,
    RecipeDetails: { recipe: Recipe }
}

export default Main;