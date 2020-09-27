import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        elevation: 2,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    logo: {
        width: 30,
        height: 30,
    },
    title: {
        flex: 1,
        alignContent: 'flex-start',
        fontFamily: 'font-gothic',
        fontSize: 30,
        marginLeft: 4,
    },
    subtitle1: {
        color: colors.action_element.inactive,
    },
    subtitle2: {
        color: colors.action_element.active,
    },
})