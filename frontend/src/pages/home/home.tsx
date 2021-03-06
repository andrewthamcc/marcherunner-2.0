import React from 'react'
import { useQuery, gql } from '@apollo/client'

export const Home: React.FC = () => {
  const DUMMY = gql`
    query dummy {
      dummy {
        firstName
        lastName
        email
      }
    }
  `

  const { data, loading, error } = useQuery(DUMMY)
  console.log(data)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
