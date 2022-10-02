import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Symbol, Text } from '../components'
import { useAuth } from '../auth/use-auth'
import { createCache } from './cache'

const ErrorView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const httpLink = new HttpLink({
  uri: `http://192.168.86.85:4000/graphql`,
})

export const ApolloWrapper: React.FC = ({ children }) => {
  const { authError, token } = useAuth()

  const authLink = setContext(async (_, { headers, ...rest }) => {
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }
  })

  const client = new ApolloClient({
    cache: createCache(),
    link: authLink.concat(httpLink),
  })

  if (authError) {
    return (
      <ErrorView>
        <Symbol symbol="error" />
        <Text align="center" variant="body-copy-xsmall">
          {authError}
        </Text>
      </ErrorView>
    )
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
