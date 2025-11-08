import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    itemWrapper: {
        width: '50%',
        padding: 5,

    },
    itemContent: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        height: 52,
        alignItems: 'center',
        justifyContent: "center",

    }
})