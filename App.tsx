import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './src/modules/splashScreen/view/SplashScreen'
import { RootStack } from './src/routes/RootNavigation'
import ScreenWrapper from './src/components/ScreenWrapper'

const App = () => {
  return (
    <ScreenWrapper>
      <RootStack />
    </ScreenWrapper>

  )
}

export default App