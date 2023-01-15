import { SafeAreaView, StyleSheet, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import MyButton from "../../../core/components/MyButton";
import { MyField } from "../../../core/components/MyTextfield";
import { Colors } from "../../../core/constants/constants";
import Ionicons from '@expo/vector-icons/Ionicons';
import StyledText from "../../../core/components/MyText";
import useLoginController from "../controller/login_controller";



const Login = () => {
    const { width } = useWindowDimensions();

    const {
        username,
        password,
        setUsername,
        setPassword,
        onLoginClick,
        onRegisterClick
    } = useLoginController();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <Ionicons name='lock-closed' size={100} color={Colors.secondary} />
                <View style={{ marginTop: 20 }}>
                    <MyField placeholder="Username" onChange={() => { }} textColor={Colors.secondary}
                        icon={{ name: 'person-outline', size: 30, }} style={styles.field}
                        onChangeText={setUsername} value={username}
                    />
                    <MyField placeholder="Password" onChange={() => { }} textColor={Colors.secondary}
                        icon={{ name: 'lock-closed-outline', size: 30, }} style={styles.field}
                        secureTextEntry onChangeText={setPassword} value={password}
                    />
                    <MyButton title="Login" color={Colors.accent} titleColor={Colors.light_grey}
                        onPress={onLoginClick}
                        style={{ height: 60, width: width - 20, marginVertical: 20 }}
                    />

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <StyledText fontSize={14} fontWeight='Regular'>Don't have an account ? </StyledText>
                        <MyButton title="Register" color={'transparent'} titleColor={Colors.secondary}
                            onPress={onRegisterClick}
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