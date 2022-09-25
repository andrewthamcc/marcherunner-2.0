import React from 'react'
import { Checkbox, IconButton } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import './style.scss'

interface Props {
  item: Dashboard_items
}

export const CategoryItem: React.FC<Props> = ({ item }) => {
  const { id, name, purchased } = item

  const handleUpdate = async () => {
    return
  }

  const handleDelete = async () => {
    return
  }

  return (
    <li className="category-item">
      <Checkbox
        checked={purchased}
        label={name}
        name={`${id}-${name}`}
        onChange={handleUpdate}
      />{' '}
      <IconButton
        a11ylabel="Delete Item"
        className="category-item-delete"
        icon="trash"
        onClick={handleDelete}
      />
    </li>
  )
}
