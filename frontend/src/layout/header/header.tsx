import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import { ReactComponent as Runner } from './assets/runner.svg'
import './style.scss'

export const Header: React.FC = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  return (
    <header className="header">
      <div className="header-flex-container container">
        <Link to={isAuthenticated ? '/dashboard' : '/'}>
          <div className="header-title">
            <h2>MarchéRunner</h2>
            <Runner className="header-title-icon" />
          </div>
        </Link>

        <Button
          border={false}
          color="orange"
          label={isAuthenticated ? 'Logout' : 'Sign In'}
          onClick={isAuthenticated ? () => logout() : loginWithPopup}
        />
      </div>
    </header>
  )
}
