import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

interface Props extends RouteProps {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({ component, ...props }) => {
  return (
    <Route component={withAuthenticationRequired(component, {})} {...props} />
  )
}
