import Ionicons from '@expo/vector-icons/Ionicons';
import type { RouteProp } from '@react-navigation/core'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RootStackParams } from '../../../main';
import { Colors } from './constants';
import { Platform, StyleSheet, Text, View } from "react-native";
import StyledText from '../components/MyText';

export const TabOptions: ((props: {
    route: RouteProp<RootStackParams, keyof RootStackParams>;
    navigation: any;
}) => BottomTabNavigationOptions) = ({ route }) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>['name'];

            switch (route.name) {
                case 'Home':
                    iconName = focused ? 'home' : 'home-outline'
                    break;
                case 'Search':
                    iconName = focused ? 'search' : 'search-outline'
                    break;
                case 'Settings':
                    iconName = focused ? 'settings' : 'settings-outline'
                    break;
                default:
                    iconName = 'home'
            }
            
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: Platform.OS == 'ios' ? 10 : 0 }}>
                    <Ionicons
                        name={iconName} size={30}
                        color={focused ? Colors.accent : Colors.light_grey} />
                    <StyledText fontSize={14} fontWeight='Medium'>
                        {route.name}
                    </StyledText>
                </View>
            )
        },
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabBar, ...styles.shadow },
    }

}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 60,
        backgroundColor: Colors.dark_grey,
        borderTopColor: Colors.dark_grey,
    },
    shadow: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,

    }
})