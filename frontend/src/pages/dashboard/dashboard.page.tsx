import React from 'react'
import { useQuery } from '@apollo/client'
import { Layout } from '../../layout'
import {
  CategoryIcon,
  CategoryVariants,
  LoadingSpinner,
} from '../../components'
import { DASHBOARD_QUERY } from './query'
import { Dashboard as DashboardData } from './types/Dashboard'

export const Dashboard = () => {
  const { data, loading, error } = useQuery<DashboardData>(DASHBOARD_QUERY)

  if (loading || error || !data) {
    return (
      <Layout>
        {!data && <p>No Data!</p>}
        {error && <p>{error.message}</p>}
        {loading && <LoadingSpinner />}
      </Layout>
    )
  }

  return (
    <Layout>
      {data.groceryCategory.map((c) => (
        <CategoryIcon icon={c.categoryName as CategoryVariants} key={c.id} />
      ))}
    </Layout>
  )
}
