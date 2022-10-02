import React from 'react'
import { Pressable } from 'react-native'
import { Symbol, IconButton } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'
import {
  CategoryItemContainer,
  CategoryItemCheckbox,
  CategoryItemText,
} from './style'

interface Props {
  item: Dashboard_items
}

export const CategoryItem: React.FC<Props> = ({ item }) => {
  const { deleteItem } = useDeleteItem()
  const { updateItem } = useUpdateItem()
  const { id, name, purchased } = item

  const handleUpdate = async () => {
    await updateItem(id)
  }

  const handleDelete = async () => {
    await deleteItem(id)
  }

  return (
    <CategoryItemContainer>
      <Pressable
        accessibilityHint="Update Item"
        accessibilityLabel={purchased ? 'Purchased' : 'Not Purchased'}
        onPress={handleUpdate}
      >
        <CategoryItemCheckbox>
          <Symbol symbol={purchased ? 'checkmark' : 'unselected'} />
          <CategoryItemText strikethrough={purchased}>{name}</CategoryItemText>
        </CategoryItemCheckbox>
      </Pressable>
      <IconButton
        accessibilityLabel="Delete Item"
        icon="trash"
        onPress={handleDelete}
      />
    </CategoryItemContainer>
  )
}
