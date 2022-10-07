import React from 'react'
import { View } from 'react-native'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryList } from '../category-list'

interface Props {
  categories: Dashboard_groceryCategories[]
  handleSelectItems: (id: string) => void
  isDeleting: boolean
  items: Dashboard_items[]
  selectedItems: string[]
  showDelete: () => void
}

export const ShoppingList: React.FC<Props> = ({
  categories,
  handleSelectItems,
  isDeleting,
  items,
  selectedItems,
  showDelete,
}) => {
  return (
    <View>
      {categories
        .filter((c) => c.categoryName !== 'all')
        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
        .map((c) => {
          const categoryItems = items.filter((i) => i.categoryId === c.id)
          return (
            <CategoryList
              category={c}
              handleSelectItems={handleSelectItems}
              isDeleting={isDeleting}
              items={categoryItems}
              key={c.id}
              selectedItems={selectedItems}
              showDelete={showDelete}
            />
          )
        })}
    </View>
  )
}
