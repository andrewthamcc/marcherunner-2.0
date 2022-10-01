import React from 'react'
import { Home } from './home'
import { Dashboard } from './dashboard'
import { useAuth } from '../auth/use-auth'

export const Screens: React.FC = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return <Dashboard />

  return <Home />
}
