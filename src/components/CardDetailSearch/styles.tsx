import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        elevation: 5,
        margin: 5,
        backgroundColor: colors.white,
    },
    details: {
        marginLeft: 5,
        flex: 1,
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(3),
        color: colors.dark_gray,
    },
    year_autor: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        paddingLeft: 3.5,
        color: colors.main_color,
        lineHeight: 15,
    },
    container_time: {
        marginTop: 10,
        paddingLeft: 3.5,
        alignItems: 'flex-start',
    },
    time: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        color: colors.black,
        borderWidth: 0.5,
        borderRadius: 4,
        paddingLeft: 3,
        paddingRight: 3,
        borderColor: colors.dark_gray,
    },
    types: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        flex: 1,
        textAlignVertical: "center",
        paddingLeft: 3.5,
        color: colors.black,
    },
    gradient: {
        flex: 1,
    },
    containerRating: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 4.5,
        paddingRight: 4.5,
        alignItems: 'flex-start',
    },
})