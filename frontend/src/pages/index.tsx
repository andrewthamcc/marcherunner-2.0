import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../auth/private-route/private-route'
import { Dashboard } from './dashboard'
import { Home } from './home'

const Pages = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <PrivateRoute component={Dashboard} path="/dashboard" />
    </Switch>
  )
}

export default Pages
