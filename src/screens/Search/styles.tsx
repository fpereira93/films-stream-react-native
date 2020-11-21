import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: colors.white,
    },
    wrapperActivityIndicator: {
        flex: 1,
        justifyContent: "center",
    },
    activityIndicator: {
        width: "100%",
        zIndex: 1,
    },
})