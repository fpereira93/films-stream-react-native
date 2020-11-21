import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    containerLine: {
        flex: 1,
        margin: 15,
        flexDirection: "row",
    },
    iconHistoric: {
        flex: 0,
        marginRight: 15,
        alignSelf: "center",
    },
    touchableContainer: {
        flex: 1,
    },
    touchable: {
        flex: 1,
        flexDirection: "row",
    },
    resultLineText: {
        textAlignVertical: "center",
        fontSize: fontSizeResponsive(2),
        fontWeight: "bold",
    },
    iconPutText: {
        transform: [{ rotate: '45deg' }],
        marginLeft: 15,
    },
    iconSad: {
        alignSelf: "center",
    },
    noResultsText: {
        margin: 10,
        color: colors.medium_gray,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(3.2),
        textAlign: "center",
    },
    iconCloudSearch: {
        alignSelf: "center",
    },
})

export default styles