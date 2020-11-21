import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2.5),
        color: colors.dark_gray,
        borderLeftWidth: 2.5,
        borderLeftColor: colors.main_color,
        paddingLeft: 10,
    },
})