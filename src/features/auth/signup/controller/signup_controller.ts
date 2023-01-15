import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParams } from "../../../../main";
import { useAppDispatch } from "../../../../redux/hooks";
import { UserActions } from "../../../../redux/slices/user_slice";
import { User } from "../../../core/models/user";

type Props = NativeStackNavigationProp<RootStackParams,'Signup'>;

const useSignUpController = () => {

    const navigation = useNavigation<Props>();

    const [username,setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const dispatch = useAppDispatch();


    const signUpClicked = () => {
        if (username && password && email && password){
            if (password == confirmPassword){

                var data = {
                    username,
                    password,
                    email,
                    phoneNumber,
                    confirmPassword
                }


                const user:User = {
                    name:username,
                    token:'adsfdsa',
                    id:432,
                    data:{
                        phonenumber:phoneNumber,
                        favoriteRecipes:[],
                        birthdate:'12/2/1997'
                    }
                }

                dispatch(UserActions.login(user));

                navigation.navigate('Tabs');
            }
        }
    }

    return {
        username,setUsername,
        email,setEmail,
        phoneNumber,setPhoneNumber,
        password,setPassword,
        confirmPassword, setConfirmPassword,
        signUpClicked,
    }

}
export default useSignUpController;