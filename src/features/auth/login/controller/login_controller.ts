import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useState } from "react";
import { Alert } from "react-native";
import { RootStackParams } from "../../../../main";
import { useAppDispatch } from "../../../../redux/hooks";
import { UserActions } from "../../../../redux/slices/user_slice";
import { User } from "../../../core/models/user";

type Props = NativeStackNavigationProp<RootStackParams, 'Login'>

const useLoginController = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const navigation = useNavigation<Props>();

    const dispatch = useAppDispatch();

    const onRegisterClick = () => {
        navigation.navigate('Signup');
    }

    const onLoginClick = () => {

        if (username && password) {
            let user: User = { id: 124, name: username, data: { phonenumber: '+24912480187', birthdate: '2/12/1997', favoriteRecipes: [] }, token: 'adfioji4f' }

            dispatch(UserActions.login(user));

            navigation.navigate('Tabs');
            setUsername('');
            setPassword('');
        }else{
            Alert.alert('Error','Empty username or password')
        }
    }

    return {
        username,
        password,
        setUsername,
        setPassword,
        onLoginClick,
        onRegisterClick
    }

}
export default useLoginController;