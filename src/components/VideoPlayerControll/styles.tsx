import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
        zIndex: 9999,
        justifyContent: "center",
    },
});

export default styles;