import React from 'react'
import { Pressable } from 'react-native'
import { Symbol, Icon } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'
import {
  CategoryItemContainer,
  CategoryItemCheckbox,
  CategoryItemText,
} from './style'

interface Props {
  isDeleteVisible: boolean
  item: Dashboard_items
  showDelete: () => void
}

export const CategoryItem: React.FC<Props> = ({
  isDeleteVisible,
  item,
  showDelete,
}) => {
  const { deleteItem } = useDeleteItem()
  const { updateItem } = useUpdateItem()
  const { id, name, purchased } = item

  const handlePress = async () => {
    if (isDeleteVisible) {
      await deleteItem(id)
      return
    }

    await updateItem(id)
  }

  return (
    <CategoryItemContainer>
      <Pressable
        accessibilityHint="Update Item"
        accessibilityLabel={purchased ? 'Purchased' : 'Not Purchased'}
        onLongPress={showDelete}
        onPress={handlePress}
      >
        <CategoryItemCheckbox>
          {!isDeleteVisible ? (
            <Symbol symbol={purchased ? 'checkmark' : 'unselected'} />
          ) : (
            <Icon color="light-grey" height={20} icon="trash" width={20} />
          )}
          <CategoryItemText purchased={purchased}>{name}</CategoryItemText>
        </CategoryItemCheckbox>
      </Pressable>
    </CategoryItemContainer>
  )
}
