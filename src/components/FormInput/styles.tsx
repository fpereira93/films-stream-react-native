import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 32,
        backgroundColor: colors.light_gray,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        borderRadius: 2,
        paddingLeft: 8,
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
    },
    iconClear: {
        paddingRight: 7,
        paddingLeft: 7,
    },
})