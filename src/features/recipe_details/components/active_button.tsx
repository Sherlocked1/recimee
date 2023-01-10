import { TouchableOpacity } from "react-native-gesture-handler"
import StyledText from "../../core/components/MyText"

const ActiveButton = (props: ActiveButtonProps) => {
    return (
        <TouchableOpacity onPress={()=>props.onPress(props.title)}>
            <StyledText style={{ color: props.isActive ? props.activeColor : props.inActiveColor }} fontSize={18} fontWeight='Bold'> {props.title} </StyledText>
        </TouchableOpacity>
    )
}

export default ActiveButton;

export type ActiveButtonProps = {
    title:string,
    isActive: boolean,
    onPress:(name:string)=>void,
    activeColor?:string,
    inActiveColor?:string,

}