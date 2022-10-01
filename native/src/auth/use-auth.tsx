import { useContext } from 'react'
import { Auth, AuthContext } from './auth.provider'

export function useAuth(): Auth {
  const auth = useContext(AuthContext)
  if (!auth) throw new Error('Cannot use auth outside of auth provider.')

  return auth
}
