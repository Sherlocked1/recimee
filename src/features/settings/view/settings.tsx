import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { SafeAreaView, View } from "react-native"
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { RootStackParams } from "../../../main";
import { useAppSelector } from "../../../redux/hooks";
import { UserActions } from "../../../redux/slices/user_slice";
import MyImage from "../../core/components/MyImage";
import StyledText from "../../core/components/MyText";
import { Colors } from "../../core/constants/constants";
import SettingsButton from "../components/settings_btn";

type Props = NativeStackNavigationProp<RootStackParams,'Tabs'>

const SettingsView = () => {
    
    const dispatch = useDispatch();

    const user = useAppSelector((state)=>state.rootReducer.UserReducer.user)

    const navigation = useNavigation<Props>();

    const signOut = () => {
        
        dispatch(UserActions.logout());
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={{ padding: 80 }}>
            <HeaderContainer>
                <MyImage height={110} width={110} isCircle borderRadius={40} style={{ backgroundColor: Colors.primary }} />
                <View style={{ marginLeft: 10 }}>
                    <StyledText style={{ marginVertical: 5 }} fontSize={16} fontWeight='SemiBold'>{user?.name}</StyledText>
                    <StyledText fontSize={13} fontWeight='Regular'>{user?.data.birthdate}</StyledText>
                    <StyledText fontSize={13} fontWeight='Regular'>{user?.data.phonenumber}</StyledText>
                </View>
            </HeaderContainer>
            <HeaderContainer style={{ marginTop: 0,flexDirection:'column' }}>
                <SettingsButton title="Profile" onPress={()=>{}} />
                <SettingsButton title="Privacy" onPress={()=>{}} />
                <SettingsButton title="About" onPress={()=>{}} />
                <SettingsButton title="Sign out" onPress={signOut} />
            </HeaderContainer>
        </SafeAreaView>
    )
}

const HeaderContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
    background-color: ${Colors.light_grey};
    padding: 10px 20px;
    margin: 20px 20px;
`

export default SettingsView;