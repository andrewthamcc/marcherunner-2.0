import React, { useState } from 'react'
import { StoreObject, useApolloClient } from '@apollo/client'
import {
  ConfirmationModal,
  IconButton,
  LoadingSpinner,
  SearchInput,
  Text,
  useToast,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import { restClient } from '../../../../rest-client'
import './style.scss'

interface Props {
  handleSearch: (search: string) => void
  hasPurchasedItems: boolean
  hasItems: boolean
}

type DeleteType = 'all' | 'purchased'

const DELETE_ALL = '/item/deleteAll'
const DELETE_PURCHASED = '/item/deletePurchased'

export const ShoppingListControls: React.FC<Props> = ({
  handleSearch,
  hasPurchasedItems,
  hasItems,
}) => {
  const [loading, setLoading] = useState(false)
  const [itemDeleteType, setItemDeleteType] = useState<DeleteType | null>(null)
  const { isOpen, closeModal, openModal } = useModal()
  const toast = useToast()
  const client = useApolloClient()

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

      closeModal()
    } catch (error) {
      toast(`Could not delete ${deleteType} items.`, { variant: 'error' })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="shopping-list-controls">
      <SearchInput
        id="shopping-list-search"
        name="shopping-list-search"
        onSearch={handleSearch}
        placeholder="Search"
      />

      <div className="shopping-list-controls-right">
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
