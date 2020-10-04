import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 32,
        backgroundColor: colors.medium_gray,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        borderRadius: 2,
        paddingLeft: 8,
        fontSize: 16,
    },
    iconClear: {
        paddingRight: 7,
        paddingLeft: 7,
    },
})