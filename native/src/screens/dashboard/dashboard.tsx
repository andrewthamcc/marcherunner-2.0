import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useQuery } from '@apollo/client'
import { colors } from '../../theme'
import {
  CenteredView,
  FullWidthHeight,
  LoadingSpinner,
  Text,
} from '../../components'
import { CategoryList, Header, ShoppingList } from './components'
import {
  Dashboard as DashboardData,
  Dashboard_groceryCategories,
} from './types/Dashboard'
import { useDeleteItems } from './use-delete-items'
import { DASHBOARD_QUERY } from './query'
import { ShoppingListControls } from './components/shoppling-list-controls/shopping-list-controls'

export const Dashboard: React.FC = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [filteredCategory, setFilteredCategory] =
    useState<Dashboard_groceryCategories | null>(null)

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
      <CenteredView>
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
      </CenteredView>
    )
  }

  if (!data) {
    return (
      <CenteredView>
        <Text align="center" variant="body-copy-xlarge">
          No Data!
        </Text>
        <Text align="center" variant="body-copy-xsmall">
          Something has gone very very wrong...
        </Text>
      </CenteredView>
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

  const handleFilter = (categoryId: string | null) => {
    if (!categoryId) {
      setFilteredCategory(null)
      return
    }

    const category = data.groceryCategories.find((c) => c.id === categoryId)
    setFilteredCategory(category as Dashboard_groceryCategories)
  }

  return (
    <>
      <Header
        handleDeleteItems={handleDeleteItems}
        isDeleteDisabled={!selectedItems.length}
        isDeleteLoading={deleteLoading}
        isDeleting={isDeleting}
      />
      <FullWidthHeight>
        <ScrollView>
          <ShoppingListControls
            categories={data.groceryCategories}
            handleFilter={handleFilter}
            hasItems={data.items.length > 0}
            hasPurchasedItems={data.items.filter((i) => i.purchased).length > 0}
            isFiltered={Boolean(filteredCategory)}
          />
          <StatusBar backgroundColor={colors.green} />
          {filteredCategory ? (
            <CategoryList
              category={filteredCategory}
              handleSelectItems={handleSelectItems}
              isDeleting={isDeleting}
              items={data.items.filter(
                (i) => i.categoryId === filteredCategory.id
              )}
              selectedItems={selectedItems}
              showDelete={() => setIsDeleting(true)}
            />
          ) : (
            <ShoppingList
              categories={data.groceryCategories}
              handleSelectItems={handleSelectItems}
              isDeleting={isDeleting}
              items={data.items}
              selectedItems={selectedItems}
              showDelete={() => setIsDeleting(true)}
            />
          )}
        </ScrollView>
      </FullWidthHeight>
    </>
  )
}
