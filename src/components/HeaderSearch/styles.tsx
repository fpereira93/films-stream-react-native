import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"
import { HEADER } from "../../ultils/dimensions"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 2,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: HEADER.height,
    },
    buttonIcon: {
        paddingRight: 15,
    },
    formInput: {
        flex: 1,
    },
})