import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Icon, LoadingSpinner, Symbol, Text } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'
import {
  CategoryItemContainer,
  CategoryItemCheckbox,
  CategoryItemText,
  SwipeContainer,
  DeleteIcon,
  FullWidthPressable,
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
  const { deleteItem, loading } = useDeleteItem()
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

  const handleDelete = async () => {
    await deleteItem(id)
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableLeftOpen={handleDelete}
        renderLeftActions={() => (
          <SwipeContainer>
            <DeleteIcon>
              {loading ? (
                <LoadingSpinner color="white" />
              ) : (
                <Icon color="white" height={20} icon="trash" width={20} />
              )}
            </DeleteIcon>
            <Text color="white" variant="body-copy-small">
              Delete
            </Text>
          </SwipeContainer>
        )}
      >
        <CategoryItemContainer>
          <FullWidthPressable
            accessibilityHint="Update Item"
            accessibilityLabel={purchased ? 'Purchased' : 'Not Purchased'}
            onLongPress={handleShowDelete}
            onPress={handlePress}
          >
            <CategoryItemCheckbox>
              {isDeleting && (
                <Symbol
                  height={20}
                  symbol={selectedItems.includes(id) ? 'remove' : 'unselected'}
                  width={20}
                />
              )}
              {!isDeleting && (
                <Symbol
                  height={20}
                  symbol={purchased ? 'checkmark' : 'unselected'}
                  width={20}
                />
              )}
              <CategoryItemText purchased={purchased}>{name}</CategoryItemText>
            </CategoryItemCheckbox>
          </FullWidthPressable>
        </CategoryItemContainer>
      </Swipeable>
    </GestureHandlerRootView>
  )
}
