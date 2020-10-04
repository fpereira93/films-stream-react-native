import { ViewStyle } from "react-native";

export interface IconParams {
    name: string
    color?: string
    size?: number
}

export interface ButtonIconParams {
    onPress: () => void
    icon: IconParams
    style: ViewStyle
}