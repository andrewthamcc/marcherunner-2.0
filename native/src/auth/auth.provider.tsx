import React, { createContext, useEffect, useState } from 'react'
import { Platform } from 'react-native'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_AUDIENCE,
} from '@env'
import { bearerToken } from '../apollo/store'

export interface Auth {
  authError: string | null
  isAuthenticated: boolean
  login: () => void
  logout: () => void
  token: string | null
}

export const AuthContext = createContext<Auth>({
  authError: null,
  isAuthenticated: false,
  login: () => undefined,
  logout: () => undefined,
  token: null,
})

const authorizationEndpoint = `https://${REACT_APP_AUTH0_DOMAIN}/authorize`
const useProxy = Platform.select({ web: false, default: true })
const redirectUri = AuthSession.makeRedirectUri({ useProxy })

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const [_, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: REACT_APP_AUTH0_CLIENT_ID,
      redirectUri,
      responseType: 'token id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        audience: REACT_APP_AUTH0_AUDIENCE,
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint }
  )

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        setAuthError(result.params.error_description || 'something went wrong')
        return
      }

      if (result.type === 'success') {
        const token = result.params.access_token
        setToken(token)
        bearerToken(token)

        setIsAuthenticated(true)
      }
    }
  }, [result])

  const login = () => promptAsync({ useProxy })

  const logout = async () => {
    try {
      await WebBrowser.openAuthSessionAsync(
        `https://${REACT_APP_AUTH0_DOMAIN}/v2/logout?client_id=${REACT_APP_AUTH0_CLIENT_ID}&returnTo=${redirectUri}`,
        'redirectUrl'
      )

      setIsAuthenticated(false)
      setToken(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ authError, isAuthenticated, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  )
}
