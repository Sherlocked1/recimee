import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { MyTheme } from "./features/core/constants/constants";
import { TabOptions } from "./features/core/constants/tab_style";
import Home from "./features/home/view/home";
import SearchView from "./features/search/view/search";
import SettingsView from "./features/settings/view/settings";

const Main = () => {

    const Tab = createBottomTabNavigator<RootStackParams>();

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <NavigationContainer theme={MyTheme}>
                <Tab.Navigator screenOptions={TabOptions}>
                    <Tab.Screen options={{ headerShown: false }} component={Home} name='Home' />
                    <Tab.Screen options={{ headerShown: false }} component={SearchView} name='Search' />
                    <Tab.Screen options={{ headerShown: false }} component={SettingsView} name='Settings' />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export type RootStackParams = {
    Home: undefined,
    Search: undefined,
    Settings:undefined
}

export default Main;