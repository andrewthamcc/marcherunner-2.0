import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { View } from 'react-native'
import { LoadingSpinner, Symbol, Text } from '../components'
import { useAuth } from '../auth/use-auth'
import { REACT_APP_GRAPHQL_URL } from '@env'
import { bearerToken } from './store'
import { createCache } from './cache'

const httpLink = new HttpLink({ uri: REACT_APP_GRAPHQL_URL })

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Symbol symbol="error" />
    <Text align="center" variant="body-copy-xsmall">
      {authError}
    </Text>
  </View>
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
