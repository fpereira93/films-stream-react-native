import { ViewStyle } from "react-native";

export interface FormInputParams {
    style?: ViewStyle
    placeholder?: string
    // eslint-disable-next-line no-unused-vars
    onChange: (text: string) => void
}