import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Home: React.FC = () => {
  const { loginWithPopup } = useAuth0()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={loginWithPopup}>login</button>
    </div>
  )
}
