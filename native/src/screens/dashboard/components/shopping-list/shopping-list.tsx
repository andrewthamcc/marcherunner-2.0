import React from 'react'
import { View } from 'react-native'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryList } from '..'

interface Props {
  categories: Dashboard_groceryCategories[]
  items: Dashboard_items[]
}

export const ShoppingList: React.FC<Props> = ({ categories, items }) => {
  return (
    <View>
      {categories
        .filter((c) => c.categoryName !== 'all')
        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
        .map((c) => {
          const categoryItems = items.filter((i) => i.categoryId === c.id)
          return <CategoryList category={c} items={categoryItems} key={c.id} />
        })}
    </View>
  )
}
