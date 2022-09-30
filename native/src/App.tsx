import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloWrapper } from './apollo'
import { Screens } from './screens'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar style="auto" /> */}
        <Screens />
      </SafeAreaView>
    </NavigationContainer>
  )
}

registerRootComponent(App)
