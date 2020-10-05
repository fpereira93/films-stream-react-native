import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

const valueRadius = 5

export default StyleSheet.create({
    infoMovie: {
        flex: 1,
        flexDirection: "row",
        elevation: 5,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: colors.white,
        borderTopLeftRadius: valueRadius,
        borderTopRightRadius: valueRadius,
    },
    image: {
        borderTopLeftRadius: valueRadius,
    },
    details: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2.5,
        paddingBottom: 2.5,
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
        color: colors.main_color,
    },
    container_time: {
        marginTop: 10,
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
        color: colors.dark_gray,
    },
    containerFeedback: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    containerViews: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    textViews: {
        marginRight: 5,
        fontSize: fontSizeResponsive(2),
        textAlignVertical: "center",
    },
    imageViews: {
        width: 17,
        height: 17,
    },
    containerSinopse: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-end",
        borderTopWidth: 0.2,
        backgroundColor: colors.white,
        marginLeft: 10,
        elevation: 5,
        marginRight: 10,
        marginBottom: 10,
        borderBottomLeftRadius: valueRadius,
        borderBottomRightRadius: valueRadius,
    },
    textSinopse: {
        flex: 1,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "justify",
        fontFamily: 'Montserrat-Medium',
        borderBottomLeftRadius: valueRadius,
        borderBottomRightRadius: valueRadius,
        fontSize: fontSizeResponsive(1.8),
        color: colors.dark_gray,
    },
    linearGradientSinopse: {
        position: "absolute",
        width: '100%',
        height: '100%',
        zIndex: 1,
        borderBottomLeftRadius: valueRadius,
        borderBottomRightRadius: valueRadius,
    },
    iconViewMoreSinopse: {
        position: "absolute",
        alignSelf: "center",
        zIndex: 2,
    },
    collapsedTextSinopse: {
        maxHeight: 35,
    },
    expandTextSinopse: {
        marginBottom: 5,
    },
})