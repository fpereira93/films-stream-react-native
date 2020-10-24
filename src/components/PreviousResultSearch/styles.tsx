import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { fontSizeResponsive } from "../../ultils/dimensions"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
    noResults: {
        margin: 10,
        color: colors.black,
        fontFamily: 'Montserrat-Medium',
        fontSize: fontSizeResponsive(2),
        textAlign: "center",
    },
})

export default styles