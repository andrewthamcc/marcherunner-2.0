import React from 'react'
import { useQuery } from '@apollo/client'
import { Layout } from '../../layout'
import { LoadingSpinner, Text } from '../../components'
import { ShoppingList } from './components'
import { DASHBOARD_QUERY } from './query'
import { Dashboard as DashboardData } from './types/Dashboard'
import './style.scss'

export const Dashboard = () => {
  const { data, loading, error } = useQuery<DashboardData>(DASHBOARD_QUERY)

  if (loading || error) {
    if (error) console.error(error)
    return (
      <Layout>
        <div className="dashboard-initial">
          {error && <Text align="center">{error.message}</Text>}
          {loading && (
            <>
              <LoadingSpinner />
              <Text align="center" variant="body-copy-xsmall">
                Loading...
              </Text>
            </>
          )}
        </div>
      </Layout>
    )
  }

  if (!data) {
    return (
      <Layout>
        <div className="dashboard-initial">
          <Text align="center" variant="body-copy-xlarge">
            No Data!
          </Text>
          <Text align="center" variant="body-copy-xsmall">
            Something has gone very very wrong...
          </Text>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <ShoppingList categories={data.groceryCategories} items={data.items} />
    </Layout>
  )
}
