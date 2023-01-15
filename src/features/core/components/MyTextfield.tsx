import { View, StyleSheet, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { Colors } from "../constants/constants";

export const MyField = (props:FieldProps) => {
    return (
        <View style={[styles.container,props.style]}>
            <Ionicons name={props.icon?.name ?? 'add'} size={props.icon?.size} color={props.textColor} />
            <TextInput placeholderTextColor={props.textColor} {...props}
            style={[styles.textStyle,props.textStyle, {color:props.textColor}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:Colors.light_grey,
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:5,
        
    },
    textStyle:{
        fontSize:18,
        flex:1,
        marginLeft:5,
    }
});

interface FieldProps extends React.ComponentProps<typeof TextInput> {
    icon?:{name:React.ComponentProps<typeof Ionicons>['name'],size:number},
    style:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    textColor:string,
    placeholder?:string,
}