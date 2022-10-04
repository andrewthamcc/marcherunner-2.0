import React, { useState, useEffect } from 'react'
import { Pressable } from 'react-native'
import {
  CategoryIcon,
  CategoryVariants,
  Icon,
  IconButton,
  LoadingSpinner,
  Symbol,
} from '../../../../components'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import {
  CategoryControlsContainer,
  CategoryTitle,
  CloseDelete,
  ItemInput,
  CategoryClose,
} from './style'
import { useCreateItem } from './use-create-item'

interface Props {
  category: Dashboard_groceryCategories
  hideDelete: () => void
  isDeleteVisible: boolean
}

export const CategoryControls: React.FC<Props> = ({
  category,
  hideDelete,
  isDeleteVisible,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')
  const { createItem, loading } = useCreateItem()

  useEffect(() => {
    if (isDeleteVisible) setIsEditing(false)
  }, [isDeleteVisible])

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
    <Pressable
      onPress={() => {
        if (isDeleteVisible) {
          hideDelete()
          return
        }

        setIsEditing(true)
      }}
    >
      <CategoryControlsContainer>
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <CategoryTitle>{title}</CategoryTitle>
        {isDeleteVisible && <CloseDelete>Done?</CloseDelete>}
        {!isDeleteVisible ? (
          <Symbol symbol="add orange" />
        ) : (
          <Icon color="red" height={25} icon="close" width={25} />
        )}
      </CategoryControlsContainer>
    </Pressable>
  )
}
