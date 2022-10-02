import React from 'react'
import { ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'
import { LoadingSpinner, Text } from '../../components'
import { Dashboard as DashboardData } from './types/Dashboard'
import { DASHBOARD_QUERY } from './query'
import { ShoppingList } from './components'
import { DashboardView, LoadingErrorView } from './style'

export const Dashboard: React.FC = () => {
  const { data, loading, error } = useQuery<DashboardData>(DASHBOARD_QUERY)

  if (loading || error || !data) {
    if (error) console.error(error)
    return (
      <LoadingErrorView>
        {error && (
          <Text align="center" color="red">
            {error.message}
          </Text>
        )}
        {loading && (
          <>
            <LoadingSpinner />
            <Text align="center" variant="body-copy-xsmall">
              Loading...
            </Text>
          </>
        )}
      </LoadingErrorView>
    )
  }

  if (!data) {
    return (
      <LoadingErrorView>
        <Text align="center" variant="body-copy-xlarge">
          No Data!
        </Text>
        <Text align="center" variant="body-copy-xsmall">
          Something has gone very very wrong...
        </Text>
      </LoadingErrorView>
    )
  }

  return (
    <DashboardView>
      <ScrollView>
        <ShoppingList categories={data.groceryCategories} items={data.items} />
      </ScrollView>
    </DashboardView>
  )
}
