import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <Text>Testing</Text>
    </SafeAreaView>
  )
}
