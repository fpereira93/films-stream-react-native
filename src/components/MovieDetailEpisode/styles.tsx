import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

const borderRadius = 5

const styles = StyleSheet.create({
    episodeContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius,
        borderWidth: 0.25,
        borderColor: colors.main_color,
    },
    episodeImage: {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
    },
    episodeTitle: {
        marginLeft: 5,
        // fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2.2),
        color: colors.main_color,
        flex: 1,
    },
})

export default styles