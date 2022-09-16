import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, gql } from '@apollo/client'

const DUMMY = gql`
  query dummy {
    dummy {
      firstName
      lastName
      email
    }
  }
`

export const Dashboard = () => {
  const { data, loading, error } = useQuery(DUMMY)
  const { logout } = useAuth0()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (!data) return <p>No Data</p>

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
