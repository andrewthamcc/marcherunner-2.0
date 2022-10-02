import React, { useState } from 'react'
import { Pressable } from 'react-native'
import {
  CategoryIcon,
  CategoryVariants,
  IconButton,
  Symbol,
} from '../../../../components'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import {
  CategoryControlsContainer,
  CategoryTitle,
  ItemInput,
  CategoryClose,
} from './style'
import { useCreateItem } from './use-create-item'

interface Props {
  category: Dashboard_groceryCategories
}

export const CategoryControls: React.FC<Props> = ({ category }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')
  const { createItem, loading } = useCreateItem()

  const handleSubmit = async () => {
    if (!itemName) return
    await createItem({ name: itemName, categoryId: category.id })
  }

  if (isEditing) {
    return (
      <CategoryControlsContainer>
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <ItemInput
          autoFocus
          onBlur={() => setIsEditing(false)}
          onChangeText={(value) => setItemName(value)}
          onSubmitEditing={handleSubmit}
          value={itemName}
        />
        <Pressable disabled={!itemName || loading} onPress={handleSubmit}>
          <Symbol symbol={itemName ? 'add green' : 'add disabled'} />
        </Pressable>
        <CategoryClose>
          <IconButton
            color="red"
            disabled={loading}
            height={25}
            icon="close"
            onPress={() => setIsEditing(false)}
            width={25}
          />
        </CategoryClose>
      </CategoryControlsContainer>
    )
  }

  return (
    <Pressable onPress={() => setIsEditing(true)}>
      <CategoryControlsContainer>
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <CategoryTitle>
          {getCategoryTitle(category.categoryName as CategoryTitles)}
        </CategoryTitle>
        <Symbol symbol="add orange" />
      </CategoryControlsContainer>
    </Pressable>
  )
}
