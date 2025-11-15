// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import { Provider } from 'react-redux'
// import { store } from './src/store'
// import SplashScreen from './src/modules/splashScreen/view/SplashScreen'
// import { RootStack } from './src/routes/RootNavigation'
// import ScreenWrapper from './src/components/ScreenWrapper'
// import { AuthProvider } from './src/auth/AuthContext'
// import { auth } from './src/services/firebase'
// import { setUser } from './src/store/slices/authSlice'

// const AppContent = () => {
//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       store.dispatch(setUser(user))
//     })
//     return unsubscribe
//   }, [])

//   return (
//     <AuthProvider>
//       <ScreenWrapper>
//         <RootStack />
//       </ScreenWrapper>
//     </AuthProvider>
//   )
// }

// const App = () => {
//   return (
//     <Provider store={store}>
//       <AppContent />
//     </Provider>
//   )
// }

// export default App


import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AssingmentBottomTab from './src/routes/AssingmentBottomTab'

const App = () => {
  return (
    <View style={{ flex: 1, padding: 1 }}>

      <StatusBar backgroundColor={'#2A2F37'} />
      <AssingmentBottomTab />
    </View>
  )
}

export default App