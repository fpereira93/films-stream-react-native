import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../constants/colors'

const labelStyle: StyleProp<TextStyle> = {
    fontSize: 12,
    top: -4.5,
}

const style: StyleProp<ViewStyle> = {
    borderWidth: 0,
    backgroundColor: colors.background,
    borderTopColor: colors.background,
}

export const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: colors.action_element.active,
    inactiveTintColor: colors.action_element.inactive,
    style,
    labelStyle,
}