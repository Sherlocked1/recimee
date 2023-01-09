import { TextProps } from "react-native";
import styled from "styled-components/native";


interface MyTextProps extends TextProps{
    fontSize:number;
    fontWeight:'ExtraLight' | 'Medium' | 'Regular' | 'SemiBold' | 'Bold' 
}

const StyledText = styled.Text<MyTextProps>`
    color:white;
    font-size: ${props=>props.fontSize}px;
    font-family: 'Poppins-${props=>props.fontWeight}';
`;


export default StyledText;