import React from 'react'
import { Pressable, View } from 'react-native'
import { Symbol, IconButton, Text } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { useDeleteItem } from './use-delete-item'
import { useUpdateItem } from './use-update-item'

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
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Pressable
        accessibilityHint="Update Item"
        accessibilityLabel={purchased ? 'Purchased' : 'Not Purchased'}
        onPress={handleUpdate}
      >
        <Symbol symbol={purchased ? 'checkmark' : 'unselected'} />
        <Text strikethrough={purchased}>{name}</Text>
      </Pressable>
      <IconButton
        accessibilityLabel="Delete Item"
        icon="trash"
        onPress={handleDelete}
      />
    </View>
  )
}
