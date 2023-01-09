import { DefaultTheme } from "@react-navigation/native"

export const Colors = {
    primary: '#212121',
    secondary: '#FAFAFA',
    light_grey: '#282828',
    dark_grey:'#1c1c1c',
    text: '#878787',
    accent: '#FFE697',
}

export const MyTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: Colors.primary } }