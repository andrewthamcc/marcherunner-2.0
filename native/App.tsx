import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloWrapper } from './src/apollo'
import { ThemeProvider } from './src/theme'

export default function App() {
  return (
    <ApolloWrapper>
      <ThemeProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </ApolloWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
