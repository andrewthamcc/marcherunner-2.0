import React from 'react'
import { RouteProps } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

interface Props extends RouteProps {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({ component, ...props }) => {
  const Protected = withAuthenticationRequired(component)

  return <Protected {...props} />
}
