import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerActivityIndicator: {
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        height: 50,
        backgroundColor: colors.white,
    },
})

export default styles