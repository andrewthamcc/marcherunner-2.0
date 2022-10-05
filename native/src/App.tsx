import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import { ApolloWrapper } from './apollo'
import { Screens } from './screens'
import { AuthProvider } from './auth'

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`

export default function App() {
  return (
    <AuthProvider>
      <ApolloWrapper>
        <StyledSafeArea>
          <StatusBar style="auto" />
          <Screens />
        </StyledSafeArea>
      </ApolloWrapper>
    </AuthProvider>
  )
}

registerRootComponent(App)
