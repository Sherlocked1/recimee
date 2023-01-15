import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParams } from "../../../../main";
import MyButton from "../../../core/components/MyButton";
import { MyField } from "../../../core/components/MyTextfield";
import { Colors } from "../../../core/constants/constants";
import useSignUpController from "../controller/signup_controller";

type Props = NativeStackScreenProps<RootStackParams,'Signup'>;

const SignUp = ({navigation}:Props) => {
    
    const {
        username,setUsername,
        password,setPassword,
        confirmPassword,setConfirmPassword,
        email,setEmail,
        phoneNumber,setPhoneNumber,
        signUpClicked
    } = useSignUpController();

    return (
        <View style={{ flex: 1 ,paddingVertical:20}}>
            <MyField placeholder="Username" icon={{ name: 'person-outline', size: 30 }} textColor={Colors.secondary}
                value={username} onChangeText={setUsername} style={styles.field} returnKeyType='next' />

            <MyField placeholder="Email" icon={{ name: 'mail-outline', size: 30 }} textColor={Colors.secondary}
                value={email} onChangeText={setEmail} style={styles.field} />

            <MyField placeholder="Phone number" icon={{ name: 'phone-portrait-outline', size: 30 }} textColor={Colors.secondary}
                value={phoneNumber} onChangeText={setPhoneNumber} style={styles.field} />

            <MyField placeholder="Password" icon={{ name: 'lock-closed-outline', size: 30 }} textColor={Colors.secondary}
                value={password} onChangeText={setPassword} style={styles.field} />

            <MyField placeholder="Confirm password" icon={{ name: 'lock-closed-outline', size: 30 }} textColor={Colors.secondary}
                value={confirmPassword} onChangeText={setConfirmPassword} style={styles.field} />


            <MyButton title="Register" color={Colors.accent} titleColor={Colors.light_grey}
                onPress={signUpClicked} style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: 60,
        marginHorizontal: 10,
        marginVertical: 3
    },
    button: {
        height: 60,
        margin: 30,
    }
})

export default SignUp;