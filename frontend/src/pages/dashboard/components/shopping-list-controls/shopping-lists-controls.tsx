import React from 'react'
import { IconButton, SearchInput, useToast } from '../../../../components'
import { restClient } from '../../../../rest-client'
import './style.scss'

interface Props {
  handleSearch: (search: string) => void
}

export const ShoppingListControls: React.FC<Props> = ({ handleSearch }) => {
  const toast = useToast()

  const handleDelete = async (deleteItems: 'all' | 'purchased') => {
    if (deleteItems === 'all') {
      try {
        const res = await restClient('/item/deleteAll', 'POST')
        console.log(res)
      } catch (error) {
        toast('Could not delete all items.', { variant: 'error' })
        console.error(error)
      }
    }

    if (deleteItems === 'purchased') {
      try {
        await restClient('/item/deletePurchased', 'POST')
      } catch (error) {
        toast('Could not delete purchased items.', { variant: 'error' })
        console.error(error)
      }
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
          icon="checkout cart"
          onClick={() => handleDelete('purchased')}
        />
        <IconButton
          a11ylabel="delete all items"
          className="shopping-list-controls-delete"
          color="red"
          icon="clear cart"
          onClick={() => handleDelete('all')}
        />
      </div>
    </div>
  )
}
