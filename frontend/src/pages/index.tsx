import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../auth'
import { Dashboard } from './dashboard'
import { Home } from './home'
import { NotFound } from './404'

const Pages = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <PrivateRoute component={Dashboard} path="/dashboard" />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Pages
