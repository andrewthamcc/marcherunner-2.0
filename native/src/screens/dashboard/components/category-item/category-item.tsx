import React from 'react'
import { Pressable } from 'react-native'
import { Symbol } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'
import {
  CategoryItemContainer,
  CategoryItemCheckbox,
  CategoryItemText,
} from './style'

interface Props {
  handleSelectItems: (id: string) => void
  isDeleting: boolean
  item: Dashboard_items
  selectedItems: string[]
  showDelete: () => void
}

export const CategoryItem: React.FC<Props> = ({
  handleSelectItems,
  isDeleting,
  item,
  selectedItems,
  showDelete,
}) => {
  const { deleteItem } = useDeleteItem()
  const { updateItem } = useUpdateItem()
  const { id, name, purchased } = item

  const handlePress = async () => {
    if (isDeleting) {
      handleSelectItems(id)
      return
    }

    await updateItem(id)
  }

  const handleShowDelete = () => {
    handleSelectItems(id)
    if (!isDeleting) showDelete()
  }

  return (
    <CategoryItemContainer>
      <Pressable
        accessibilityHint="Update Item"
        accessibilityLabel={purchased ? 'Purchased' : 'Not Purchased'}
        onLongPress={handleShowDelete}
        onPress={handlePress}
      >
        <CategoryItemCheckbox>
          {isDeleting && (
            <Symbol
              symbol={selectedItems.includes(id) ? 'remove' : 'unselected'}
            />
          )}
          {!isDeleting && (
            <Symbol symbol={purchased ? 'checkmark' : 'unselected'} />
          )}
          <CategoryItemText purchased={purchased}>{name}</CategoryItemText>
        </CategoryItemCheckbox>
      </Pressable>
    </CategoryItemContainer>
  )
}
