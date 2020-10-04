import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../constants/colors'

const labelStyle: StyleProp<TextStyle> = {
    fontSize: 12,
    top: -4.5,
}

const style: StyleProp<ViewStyle> = {
    borderWidth: 0,
    backgroundColor: colors.white,
    borderTopColor: colors.white,
}

export const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: colors.main_color,
    inactiveTintColor: colors.dark_gray,
    style,
    labelStyle,
}