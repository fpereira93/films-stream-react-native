import { Animated } from "react-native";

export interface IScrollViewImageHeaderParams {
    heightInterpolation: Animated.AnimatedInterpolation
    maxHeight: number
    uriImage: string
    children: any
}