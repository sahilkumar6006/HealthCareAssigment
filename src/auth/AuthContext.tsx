import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface AuthContextValue {
  user: FirebaseAuthTypes.User | null;
  initializing: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getIdToken: (forceRefresh?: boolean) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(current => {
      setUser(current);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, [initializing]);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    initializing,
    signIn: async (email: string, password: string) => {
      await auth().signInWithEmailAndPassword(email, password);
    },
    signOut: async () => {
      await auth().signOut();
    },
    getIdToken: async (forceRefresh?: boolean) => {
      const current = auth().currentUser;
      if (!current) return null;
      try {
        const token = await current.getIdToken(!!forceRefresh);
        return token;
      } catch {
        return null;
      }
    },
  }), [user, initializing]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
