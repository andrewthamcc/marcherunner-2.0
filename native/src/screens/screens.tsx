import React from 'react'
import { useAuth } from '../auth/use-auth'
import { Home } from './home'
import { Dashboard } from './dashboard'

export const Screens: React.FC = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return <Dashboard />

  return <Home />
}
