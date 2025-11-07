import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#66B2FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});