import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { HEADER } from "../../ultils/dimensions"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 2,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: HEADER.height,
    },
    logo: {
        width: 27,
        height: 27,
    },
    title: {
        flex: 1,
        alignContent: 'flex-start',
        fontFamily: 'font-gothic',
        fontSize: 34,
        marginLeft: 4,
    },
    subtitle1: {
        color: colors.dark_gray,
    },
    subtitle2: {
        color: colors.main_color,
    },
})