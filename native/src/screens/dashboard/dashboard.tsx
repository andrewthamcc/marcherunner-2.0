import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useQuery } from '@apollo/client'
import { colors } from '../../theme'
import { LoadingSpinner, Text } from '../../components'
import { Header, ShoppingList } from './components'
import { Dashboard as DashboardData } from './types/Dashboard'
import { useDeleteItems } from './use-delete-items'
import { DASHBOARD_QUERY } from './query'
import { DashboardView, LoadingErrorView } from './style'

export const Dashboard: React.FC = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const { data, loading, error } = useQuery<DashboardData>(DASHBOARD_QUERY)
  const { deleteItems, loading: deleteLoading } = useDeleteItems()

  useEffect(() => {
    const backAction = () => {
      if (isDeleting) setIsDeleting(false)
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [isDeleting])

  if (loading || error) {
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

  const handleDeleteItems = async () => {
    await deleteItems(selectedItems)
    setIsDeleting(false)
    setSelectedItems([])
  }

  const handleSelectItems = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      const removed = selectedItems.filter((i) => i !== itemId)
      setSelectedItems(removed)
      return
    }

    setSelectedItems((prev) => [itemId, ...prev])
  }

  return (
    <>
      <Header
        handleDeleteItems={handleDeleteItems}
        hasItems={data.items.length > 0}
        hasPurchasedItems={data.items.filter((i) => i.purchased).length > 0}
        isDeleteDisabled={!selectedItems.length}
        isDeleteLoading={deleteLoading}
        isDeleting={isDeleting}
      />
      <DashboardView>
        <ScrollView>
          <StatusBar backgroundColor={colors.green} />
          <ShoppingList
            categories={data.groceryCategories}
            handleSelectItems={handleSelectItems}
            isDeleting={isDeleting}
            items={data.items}
            selectedItems={selectedItems}
            showDelete={() => setIsDeleting(true)}
          />
        </ScrollView>
      </DashboardView>
    </>
  )
}
