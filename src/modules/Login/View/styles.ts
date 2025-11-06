import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container: {
        width: '80%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#66B2FF',
        marginBottom: 60,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
    },
    forgotPassword: {
        color: '#66B2FF',
        alignSelf: 'flex-end',
        marginBottom: 30,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#66B2FF',
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        fontSize: 14,
        color: '#555',
    },
    registerLink: {
        color: '#66B2FF',
        fontWeight: 'bold',
    },
});