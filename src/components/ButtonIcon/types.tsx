import { ViewStyle } from "react-native";

export interface IIconParams {
    name: string
    color?: string
    size?: number
}

export interface IButtonIconParams {
    onPress: () => void
    icon: IIconParams
    style: ViewStyle
}