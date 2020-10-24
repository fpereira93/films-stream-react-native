import React from 'react'
import { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'

export interface IScrollViewParams {
    minHeight: number
    maxHeight: number
    children: any
    style?: ViewStyle
    // eslint-disable-next-line no-unused-vars
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void
    refScrollView?: React.RefObject<ScrollView>
}
