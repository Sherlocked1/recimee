import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabOptions } from "./features/core/constants/tab_style"
import Home from "./features/home/view/home"
import SearchView from "./features/search/view/search"
import SettingsView from "./features/settings/view/settings"
import { RootTabsParams } from "./main"

const TabsView = () => {
    const Tab = createBottomTabNavigator<RootTabsParams>()
    return (
        <Tab.Navigator screenOptions={TabOptions}>
            <Tab.Screen options={{ headerShown: false }} component={Home} name='Home' />
            <Tab.Screen options={{ headerShown: false }} component={SearchView} name='Search' />
            <Tab.Screen options={{ headerShown: false }} component={SettingsView} name='Settings' />
        </Tab.Navigator>
    )
}

export default TabsView;