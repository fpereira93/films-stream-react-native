import { ViewStyle } from "react-native";

export interface IFormInputParams {
    style?: ViewStyle
    placeholder?: string
    // eslint-disable-next-line no-unused-vars
    onChange: (text: string) => void
}