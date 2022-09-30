import { ApolloWrapper } from './src/apollo'
import { StatusBar } from 'expo-status-bar'
import { Screens } from './src/screens'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Screens />
    </>
  )
}
