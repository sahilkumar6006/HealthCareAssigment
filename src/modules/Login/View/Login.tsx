import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './styles';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Text style={styles.header}>LOGIN</Text>
                <Text style={styles.appName}>Healthcare</Text>

                <View style={styles.inputContainer}>
                    {/* <Icon name="email" size={20} color="#888" style={styles.inputIcon} /> */}
                    <TextInput
                        style={styles.input}
                        placeholder="Email ID"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    {/* <Icon name="lock" size={20} color="#888" style={styles.inputIcon} /> */}
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={async () => {
                    const isUserLogin = await auth().signInWithEmailAndPassword(
                        email,
                        password,
                    );
                    console.log('"in the email and password', email, password)
                }}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.registerText}>
                        Don't Have an Account. <Text style={styles.registerLink}>Click here to register</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};



export default LoginScreen;