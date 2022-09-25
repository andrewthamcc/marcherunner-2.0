import React from 'react'
import { Checkbox, IconButton } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'
import './style.scss'

interface Props {
  item: Dashboard_items
}

export const CategoryItem: React.FC<Props> = ({ item }) => {
  const { deleteItem, loading: deleteLoading } = useDeleteItem()
  const { updateItem, loading: updateLoading } = useUpdateItem()
  const { id, name, purchased } = item

  const handleUpdate = async () => {
    await updateItem(item.id)
  }

  const handleDelete = async () => {
    await deleteItem(item.id)
  }

  return (
    <li className="category-item">
      <Checkbox
        checked={purchased}
        disabled={updateLoading}
        id={`${id}-${name}`}
        label={name}
        name={`${id}-${name}`}
        onChange={handleUpdate}
      />{' '}
      <IconButton
        a11ylabel="Delete Item"
        className="category-item-delete"
        disabled={deleteLoading}
        icon="trash"
        onClick={handleDelete}
      />
    </li>
  )
}
