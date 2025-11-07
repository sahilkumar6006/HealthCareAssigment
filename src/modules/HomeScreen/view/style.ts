import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 12,
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
        borderWidth: 1,
        borderRadius: 8,
        height: 52,
        alignItems: 'center',
        justifyContent: "center",

    }
})