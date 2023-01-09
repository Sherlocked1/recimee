import { ImageProps } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../constants/constants";

interface MyImageProps extends ImageProps {
    borderRadius?:number,
    isCircle?:boolean,
    height:number,width:number,
}

const MyImage = styled.Image<MyImageProps>`
    height: ${props=>props.height}px;
    width: ${props=>props.width}px;
    border-radius: ${props => props.isCircle ? `${props.height/2}px` : `${props.borderRadius ?? 0}px`};
    background-color: ${Colors.light_grey};
`

export default MyImage;