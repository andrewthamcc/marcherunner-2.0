import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { bearerToken } from './store'
import { createCache } from './cache'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

export const ApolloWrapper: React.FC = ({ children }) => {
  const authLink = setContext(async (_, { headers, ...rest }) => {
    const accessToken = ''

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${accessToken}`,
      },
    }
  })

  const client = new ApolloClient({
    cache: createCache(),
    link: authLink.concat(httpLink),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
