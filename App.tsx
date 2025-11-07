import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './src/modules/splashScreen/view/SplashScreen'
import { RootStack } from './src/routes/RootNavigation'
import ScreenWrapper from './src/components/ScreenWrapper'
import { AuthProvider } from './src/auth/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <ScreenWrapper>
        <RootStack />
      </ScreenWrapper>
    </AuthProvider>

  )
}

export default App