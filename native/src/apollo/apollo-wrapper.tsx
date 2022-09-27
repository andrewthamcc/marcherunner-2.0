import React, { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { bearerToken } from './store'
import { createCache } from '.'
import './style.scss'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

export const ApolloWrapper: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  // const getToken = async () => {
  //   try {
  //     const token = await getAccessTokenSilently()
  //     bearerToken(token)
  //     setAccessToken(token)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     getToken()
  //     history.push('/dashboard')
  //   }
  // }, [isAuthenticated])

  const authLink = setContext(async (_, { headers, ...rest }) => {
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

  // if (auth0Loading || (isAuthenticated && !accessToken)) {
  //   return <div className="auth-loading" />
  // }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
