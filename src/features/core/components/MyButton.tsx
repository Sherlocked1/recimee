import React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from "styled-components/native";
import StyledText from "./MyText";

const MyButton = (props:ButtonProps) => {
    const btnStyle:StyleProp<ViewStyle> = {
        backgroundColor: props.color,
        padding:10,
        borderRadius:10,
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={[btnStyle,props.style]}>
            <HorizontalContainer>
                { props.icon && <Ionicons name={props.icon?.name} size={props.icon?.size} color={props.titleColor}/>}
                <StyledText fontSize={18} fontWeight='Bold' style={{color:props.titleColor}}>
                    {props.title}
                </StyledText>
            </HorizontalContainer>
        </TouchableOpacity>
    )
}

const HorizontalContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export type ButtonProps = {
    title:string,
    icon?:{name:React.ComponentProps<typeof Ionicons>['name'],size:number},
    color:string,
    titleColor:string,
    onPress:(()=>void),
    style:StyleProp<ViewStyle>
}

export default MyButton;