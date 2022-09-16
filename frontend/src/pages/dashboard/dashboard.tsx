import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Layout } from '../../layout'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (!data) return <p>No Data</p>

  return <Layout>Dashboard</Layout>
}
