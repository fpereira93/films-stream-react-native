import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 2,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    buttonIcon: {
        paddingRight: 15,
    },
    formInput: {
        flex: 1,
    },
})