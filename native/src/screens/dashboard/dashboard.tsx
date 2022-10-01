import React from 'react'
import { ScrollView, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { useAuth } from '../../auth/use-auth'
import { Button, LoadingSpinner, Text } from '../../components'
import { DASHBOARD_QUERY } from './query'

export const Dashboard: React.FC = () => {
  const { logout } = useAuth()

  const { data, loading, error } = useQuery(DASHBOARD_QUERY)

  if (loading || error || !data) {
    return (
      <View style={{ flex: 1 }}>
          {error && <Text align="center">{error.message}</Text>}
          {loading && (
            <>
              <LoadingSpinner />
              <Text align="center" variant="body-copy-xsmall">
                Loading...
              </Text>
            </>
          )}
          {!data && (
            <>
              <Text align="center" variant="body-copy-xlarge">
                No Data!
              </Text>
              <Text align="center" variant="body-copy-xsmall">
                Something has gone very very wrong...
              </Text>
            </>
          )}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
      </ScrollView>
    </View>
  )
}
