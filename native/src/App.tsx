import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { ApolloWrapper } from './apollo'
import { Screens } from './screens'
import { AuthProvider } from './auth'

export default function App() {
  return (
    <AuthProvider>
      <ApolloWrapper>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Screens />
        </SafeAreaView>
      </ApolloWrapper>
    </AuthProvider>
  )
}

registerRootComponent(App)
