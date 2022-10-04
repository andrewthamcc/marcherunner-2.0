import React, { useState } from 'react'
import { Pressable } from 'react-native'
import {
  CategoryIcon,
  CategoryVariants,
  IconButton,
  LoadingSpinner,
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
  isDeleting: boolean
}

export const CategoryControls: React.FC<Props> = ({ category, isDeleting }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')
  const { createItem, loading } = useCreateItem()

  const handleSubmit = async () => {
    if (!itemName) return
    await createItem({ name: itemName, categoryId: category.id })
    setItemName('')
  }

  const title = getCategoryTitle(category.categoryName as CategoryTitles)

  if (isEditing) {
    return (
      <CategoryControlsContainer>
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <ItemInput
          autoFocus
          blurOnSubmit={false}
          onBlur={() => setIsEditing(false)}
          onChangeText={(value) => setItemName(value)}
          onSubmitEditing={handleSubmit}
          value={itemName}
        />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Pressable disabled={!itemName} onPress={handleSubmit}>
              <Symbol symbol={itemName ? 'add green' : 'add disabled'} />
            </Pressable>
            <CategoryClose>
              <IconButton
                color="red"
                height={25}
                icon="close"
                onPress={() => setIsEditing(false)}
                width={25}
              />
            </CategoryClose>
          </>
        )}
      </CategoryControlsContainer>
    )
  }

  return (
    <Pressable disabled={isDeleting} onPress={() => setIsEditing(true)}>
      <CategoryControlsContainer>
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <CategoryTitle>{title}</CategoryTitle>
        <Symbol symbol={isDeleting ? 'add disabled' : 'add orange'} />
      </CategoryControlsContainer>
    </Pressable>
  )
}
