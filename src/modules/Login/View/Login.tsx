import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './styles';
import { useAuth } from '../../../auth/AuthContext';
import LoaderSvg from '../../../assets/svg/Loader';

const LoginScreen: React.FC = ({ navigation }: any) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const { signIn } = useAuth();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Text style={styles.header}>LOGIN</Text>
                <Text style={styles.appName}>Healthcare</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ID"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        editable={!loading}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        editable={!loading}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>

                {error ? <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text> : null}

                <TouchableOpacity style={styles.loginButton} onPress={async () => {
                    setError(null);
                    setLoading(true);
                    try {
                        await signIn(email.trim(), password);
                        navigation.replace('Home');
                    } catch (e: any) {
                        setError(e?.message || 'Login failed');
                    } finally {
                        setLoading(false);
                    }
                }} disabled={loading}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.registerText}>
                        Don't Have an Account. <Text style={styles.registerLink}>Click here to register</Text>
                    </Text>
                </TouchableOpacity>

                {loading ? (
                    <View style={localStyles.overlay}>
                        <LoaderSvg />
                    </View>
                ) : null}
            </View>
        </ScrollView>
    );
};



export default LoginScreen;

const localStyles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
});