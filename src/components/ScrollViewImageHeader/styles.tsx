import { Platform, StyleSheet } from "react-native"

export default StyleSheet.create({
    animatedHeaderContainer: {
        position: 'absolute',
        top: (Platform.OS === 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    subContainerHeader: {
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
    },
    backgroundHeaderImage: {
        width: '100%',
        position: "absolute",
        zIndex: 0,
    },
    headerMainImage: {
        position: "relative",
        alignSelf: "center",
        zIndex: 0,
    },
})