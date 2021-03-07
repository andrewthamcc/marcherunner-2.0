import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  isAuthenticated: boolean
  component: any
}

const PrivateRoute: React.FC<Props> = ({
  isAuthenticated,
  component: Component,
}) => {
  return (
    <Route
      render={(RouteProps) =>
        !isAuthenticated ? <Redirect to="/" /> : <Component {...RouteProps} />
      }
    />
  )
}

export default PrivateRoute
