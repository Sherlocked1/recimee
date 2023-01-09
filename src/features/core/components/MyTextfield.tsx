import { View, StyleSheet, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

export const MyField = (props:FieldProps) => {
    return (
        <View style={[styles.container,props.style]}>
            <Ionicons name={props.icon?.name ?? ''} size={props.icon?.size} color={props.textColor} />
            <TextInput placeholderTextColor={props.textColor} placeholder={props.placeholder} 
            style={[styles.textStyle,props.textStyle, {color:props.textColor}]}
            keyboardType = {props.keyboardType} onChangeText={props.onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    textStyle:{
        fontSize:18,
        flex:1,
        marginLeft:5,
    }
});

interface FieldProps extends React.ComponentProps<typeof TextInput> {
    icon?:{name:any,size:number},
    style:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    textColor:string,
    placeholder?:string,
}