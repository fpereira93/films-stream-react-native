import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors } from "../../constants/colors";
import { fontSizeResponsive, HEADER, height } from "../../ultils/dimensions";

export const MIN_HEIGHT = HEADER.height
export const MAX_HEIGHT = height * 0.4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    overflowViewContainer: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 2,
        height: "100%",
        width: "100%",
    },
    containerTitleHeader: {
        position: "absolute",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: MIN_HEIGHT,
        bottom: -MIN_HEIGHT,
        zIndex: 2,
    },
    navTitleView: {
        color: colors.white,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2.5),
        textAlign: "center",
        width: "75%",
    },
    animatedHeaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.black,
        zIndex: 2,
        opacity: 0,
    },
    buttonIcon: {
        flex: 0,
        paddingHorizontal: 15,
        position: "relative",
    },
    containerButtonPlay: {
        position: "absolute",
        flexDirection: "row",
        height: MIN_HEIGHT * 2,
        width: "100%",
        zIndex: 9,
        alignItems: "center",
        justifyContent: "flex-end",
        bottom: -MIN_HEIGHT,
    },
    backgroundButtonPlay: {
        position: "absolute",
        backgroundColor: colors.white,
        width: MIN_HEIGHT * 1.22,
        height: MIN_HEIGHT * 1.22,
        marginRight: 9.22,
        right: MIN_HEIGHT / 4,
        borderRadius: MIN_HEIGHT,
        zIndex: 0,
    },
    playButtonIcon: {
        flex: 0,
        marginRight: 15,
        zIndex: 1,
    },
    containerActions: {
        position: "absolute",
        width: "100%",
        height: MIN_HEIGHT,
        zIndex: 3,
        justifyContent: "center",
    },

    section: {
        padding: 15,
        backgroundColor: colors.white,
    },
    rowMainTitle: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(4),
        color: colors.dark_gray,
    },
    subTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        color: colors.main_color,
    },

    sectionInfo: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    containerTime: {
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
    genresText: {
        marginTop: 5,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        color: colors.dark_gray,
    },
    containerFeedback: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    averageStartText: {
        color: colors.dark_gray,
        marginLeft: 5,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
    },
    sectionTitle: {
        marginBottom: 5,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(3),
        color: colors.dark_gray,
        alignSelf: "flex-start",
    },
    seasonTitle: {
        marginBottom: 10,
    },
    sectionSinopseText: {
        fontSize: fontSizeResponsive(2),
        color: colors.dark_gray,
        textAlign: 'justify',
        fontFamily: 'Montserrat-Medium',
    },
})

export default styles