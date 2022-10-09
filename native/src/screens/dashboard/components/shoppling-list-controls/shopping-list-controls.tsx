import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { useApolloClient, StoreObject } from '@apollo/client'
import {
  Button,
  CategoryIcon,
  CategoryVariants,
  CenteredModal,
  Dropdown,
  DropItem,
  IconButton,
  LoadingSpinner,
  Text,
} from '../../../../components'
import { restClient } from '../../../../rest-client'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import {
  ShoppingListContainer,
  DeleteIcons,
  IconSpacing,
  DeleteModalView,
  DeleteModalControls,
} from './style'

interface Props {
  categories: Dashboard_groceryCategories[]
  handleFilter: (categoryId: string | null) => void
  hasItems: boolean
  hasPurchasedItems: boolean
  isFiltered: boolean
}

type DeleteType = 'all' | 'purchased'
const DELETE_ALL = '/item/deleteAll'
const DELETE_PURCHASED = '/item/deletePurchased'

export const ShoppingListControls: React.FC<Props> = ({
  categories,
  handleFilter,
  hasItems,
  hasPurchasedItems,
  isFiltered,
}) => {
  const [loading, setLoading] = useState(false)
  const [itemDeleteType, setItemDeleteType] = useState<DeleteType | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [dropdownList, setDropdownList] = useState<DropItem[] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<DropItem | null>(
    null
  )
  const client = useApolloClient()

  useEffect(() => {
    const dropdownList = categories
      .map((c) => ({
        icon: <CategoryIcon icon={c.categoryName as CategoryVariants} />,
        label: getCategoryTitle(c.categoryName as CategoryTitles),
        value: c.id,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
    setDropdownList(dropdownList)
    setSelectedCategory(dropdownList[0])
  }, [])

  const handleDelete = async (deleteType: DeleteType) => {
    setLoading(true)
    const url = deleteType === 'all' ? DELETE_ALL : DELETE_PURCHASED

    try {
      await restClient(url, 'POST')

      client.cache.modify({
        fields: {
          items(prev: StoreObject[], { readField }) {
            if (deleteType === 'all') return []
            return prev.filter((i) => !readField('purchased', i))
          },
        },
      })

      setShowDeleteModal(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ShoppingListContainer>
        {dropdownList && selectedCategory && (
          <Dropdown
            list={dropdownList}
            onChange={(category) => {
              setSelectedCategory(category)

              if (category.label === 'All') {
                handleFilter(null)
                return
              }

              handleFilter(category.value as string)
            }}
            value={selectedCategory}
          />
        )}

        {!isFiltered && (
          <DeleteIcons>
            <IconButton
              accessibilityLabel="delete purchased items"
              color={hasPurchasedItems ? 'green' : 'light-grey'}
              height={35}
              icon="checkout cart"
              onPress={() => {
                setItemDeleteType('purchased')
                setShowDeleteModal(true)
              }}
              width={35}
            />
            <IconSpacing>
              <IconButton
                accessibilityLabel="delete all items"
                color={hasItems ? 'red' : 'light-grey'}
                disabled={!hasItems}
                height={35}
                icon="clear cart"
                onPress={() => {
                  setItemDeleteType('all')
                  setShowDeleteModal(true)
                }}
                width={35}
              />
            </IconSpacing>
          </DeleteIcons>
        )}
      </ShoppingListContainer>

      <Modal
        onRequestClose={() => {
          setItemDeleteType(null)
          setShowDeleteModal(false)
        }}
        transparent={true}
        visible={showDeleteModal}
      >
        <CenteredModal>
          <DeleteModalView>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Text align="center">{`Delete ${itemDeleteType?.toUpperCase()} items?`}</Text>
            )}
            <DeleteModalControls>
              <Button
                color="orange"
                label="Cancel"
                onPress={() => {
                  setItemDeleteType(null)
                  setShowDeleteModal(false)
                }}
              />
              <Button
                color="green"
                label="Confirm"
                onPress={() => {
                  if (!itemDeleteType) return
                  handleDelete(itemDeleteType)
                }}
              />
            </DeleteModalControls>
          </DeleteModalView>
        </CenteredModal>
      </Modal>
    </>
  )
}
