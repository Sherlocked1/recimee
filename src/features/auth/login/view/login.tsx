import { SafeAreaView, StyleSheet, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import MyButton from "../../../core/components/MyButton";
import { MyField } from "../../../core/components/MyTextfield";
import { Colors } from "../../../core/constants/constants";
import Ionicons from '@expo/vector-icons/Ionicons';
import StyledText from "../../../core/components/MyText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../../main";

type Props = NativeStackScreenProps<RootStackParams,'Login'>

const Login = ({navigation,route}:Props) => {
    const { width } = useWindowDimensions();

    const register = () => {
        navigation.navigate('Signup');
    }

    const login = () => {
        navigation.navigate('Tabs');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <Ionicons name='lock-closed' size={100} color={Colors.secondary} />
                <View style={{ marginTop: 20 }}>
                    <MyField placeholder="Username" onChange={() => { }} textColor={Colors.secondary}
                        icon={{ name: 'person-outline', size: 30, }} style={styles.field}
                    />
                    <MyField placeholder="Password" onChange={() => { }} textColor={Colors.secondary}
                        icon={{ name: 'lock-closed-outline', size: 30, }} style={styles.field}
                        secureTextEntry
                    />
                    <MyButton title="Login" color={Colors.accent} titleColor={Colors.light_grey}
                        onPress={login}
                        style={{ height: 60, width: width - 20, marginVertical: 20 }}
                    />

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <StyledText fontSize={14} fontWeight='Regular'>Don't have an account ? </StyledText>
                        <MyButton title="Register" color={'transparent'} titleColor={Colors.secondary}
                            onPress={register}
                            style={{ height: 50,padding:0 }}
                        />
                    </View>
                </View>
            </Container>
        </SafeAreaView>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
`

const styles = StyleSheet.create({
    field: {
        marginVertical: 10,
        height: 60
    }
})

export default Login;