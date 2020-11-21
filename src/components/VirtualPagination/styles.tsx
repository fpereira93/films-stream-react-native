import { StyleSheet } from "react-native"

const valueRadius = 5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    linearGradientLoading: {
        position: "absolute",
        justifyContent: "center",
        width: '100%',
        height: '15%',
        zIndex: 1,
        borderBottomLeftRadius: valueRadius,
        borderBottomRightRadius: valueRadius,
    },
    activityIndicator: {
        width: "100%",
        zIndex: 1,
    },
})

export default styles