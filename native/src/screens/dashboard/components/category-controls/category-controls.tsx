import React, { useEffect, useState } from 'react'
import { BackHandler, Pressable } from 'react-native'
import {
  CategoryIcon,
  CategoryVariants,
  IconButton,
  LoadingSpinner,
  Symbol,
  Text,
} from '../../../../components'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import {
  CategoryControlsContainer,
  ItemInput,
  FullWidth,
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

  useEffect(() => {
    const backAction = () => {
      if (isEditing) setIsEditing(false)
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [isEditing])

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
                accessibilityLabel="close"
                color="red"
                height={30}
                icon="close"
                onPress={() => setIsEditing(false)}
                width={30}
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
        <FullWidth>
          <Text fontWeight={600} variant="body-copy-xlarge">
            {title}
          </Text>
        </FullWidth>
        <Symbol symbol={isDeleting ? 'add disabled' : 'add orange'} />
      </CategoryControlsContainer>
    </Pressable>
  )
}
