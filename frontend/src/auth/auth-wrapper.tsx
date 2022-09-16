import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppState, Auth0Provider } from '@auth0/auth0-react'

export const Auth0WrapperWithHistory: React.FC = ({ children }) => {
  const history = useHistory()

  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || ''
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || ''
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || ''

  const onRedirectCallback = (appState?: AppState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      audience={audience}
      clientId={clientId}
      domain={domain}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  )
}
