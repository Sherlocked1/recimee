import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native"
import styled from "styled-components/native";
import { RootStackParams } from "../../../main";
import MyImage from "../../core/components/MyImage";
import StyledText from "../../core/components/MyText";
import { Colors } from "../../core/constants/constants";
import SettingsButton from "../components/settings_btn";

type Props = NativeStackScreenProps<RootStackParams,'Tabs'>

const SettingsView = ({navigation}:Props) => {
    const signOut = () => {
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView style={{ padding: 80 }}>
            <HeaderContainer>
                <MyImage height={110} width={110} isCircle style={{ backgroundColor: Colors.primary }} />
                <View style={{ marginLeft: 10 }}>
                    <StyledText style={{ marginVertical: 5 }} fontSize={16} fontWeight='SemiBold'>Mohammed Sayed</StyledText>
                    <StyledText fontSize={13} fontWeight='Regular'>25 years old</StyledText>
                    <StyledText fontSize={13} fontWeight='Regular'>+249 124 801 876</StyledText>
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