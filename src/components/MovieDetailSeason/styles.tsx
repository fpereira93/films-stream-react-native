import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive, height } from "../../ultils/dimensions"

export const HEIGHT_IMAGE_EPISODE = height * 0.089

const borderRadius = 5;

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderRadius,
        overflow: "hidden",
    },
    headerContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: colors.main_color,
        // fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2.5),
        flex: 1,
    },
})

export default styles