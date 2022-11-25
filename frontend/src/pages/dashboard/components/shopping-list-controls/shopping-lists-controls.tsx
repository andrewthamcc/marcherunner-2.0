import React, { useEffect, useState } from 'react'
import { StoreObject, useApolloClient } from '@apollo/client'
import {
  CategoryIcon,
  CategoryVariants,
  ConfirmationModal,
  DropItem,
  Dropdown,
  IconButton,
  LoadingSpinner,
  SearchInput,
  Text,
  useToast,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import { restClient } from '../../../../rest-client'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import { getCategoryTitle } from '../../../../utils'
import './style.scss'

interface Props {
  categories: Dashboard_groceryCategories[]
  handleFilter: (categoryId: string | null) => void
  handleSearch: (search: string) => void
  hasItems: boolean
  hasPurchasedItems: boolean
}

type DeleteType = 'all' | 'purchased'

const DELETE_ALL = '/item/deleteAll'
const DELETE_PURCHASED = '/item/deletePurchased'

export const ShoppingListControls: React.FC<Props> = ({
  categories,
  handleFilter,
  handleSearch,
  hasItems,
  hasPurchasedItems,
}) => {
  const [loading, setLoading] = useState(false)
  const [itemDeleteType, setItemDeleteType] = useState<DeleteType | null>(null)
  const [dropdownList, setDropdownList] = useState<DropItem[] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<DropItem | null>(
    null
  )
  const { isOpen, closeModal, openModal } = useModal()
  const toast = useToast()
  const client = useApolloClient()

  useEffect(() => {
    const dropdownList = categories
      .map((c) => ({
        icon: <CategoryIcon icon={c.categoryName as CategoryVariants} />,
        label: getCategoryTitle(c.categoryName as CategoryVariants),
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
      const res = await restClient(url, 'POST')

      if (res.status === 200) {
        client.cache.modify({
          fields: {
            items(prev: StoreObject[], { readField }) {
              if (deleteType === 'all') return []
              return prev.filter((i) => !readField('purchased', i))
            },
          },
        })
        closeModal()
      }
    } catch (error) {
      toast(`Could not delete ${deleteType} items.`, { variant: 'error' })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="shopping-list-controls">
      <div className="shopping-list-controls-search-container">
        <SearchInput
          className="shopping-list-controls-search"
          id="shopping-list-search"
          name="shopping-list-search"
          onSearch={handleSearch}
          placeholder="Search"
        />
      </div>

      <div className="shopping-list-controls-right">
        {dropdownList && selectedCategory && (
          <Dropdown
            className="shopping-list-controls-drop"
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

        <div className="shopping-list-controls-delete">
          <IconButton
            a11ylabel="delete purchased items"
            className="shopping-list-controls-delete"
            color="green"
            disabled={!hasPurchasedItems}
            icon="checkout cart"
            onClick={() => {
              setItemDeleteType('purchased')
              openModal()
            }}
          />
          <IconButton
            a11ylabel="delete all items"
            className="shopping-list-controls-delete"
            color="red"
            disabled={!hasItems}
            icon="clear cart"
            onClick={() => {
              setItemDeleteType('all')
              openModal()
            }}
          />
        </div>
      </div>

      <ConfirmationModal
        close={() => {
          setItemDeleteType(null)
          closeModal()
        }}
        isOpen={isOpen}
        onConfirm={() => {
          if (!itemDeleteType) return
          handleDelete(itemDeleteType)
        }}
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Text align="center">{`Delete ${itemDeleteType?.toUpperCase()} items?`}</Text>
        )}
      </ConfirmationModal>
    </div>
  )
}
