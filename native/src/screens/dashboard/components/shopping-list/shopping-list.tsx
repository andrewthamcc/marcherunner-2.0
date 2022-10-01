import React from 'react'
import { View } from 'react-native'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'

interface Props {
  categories: Dashboard_groceryCategories[]
  items: Dashboard_items[]
}

export const ShoppingList: React.FC<Props> = ({ categories, items }) => {
  return <View>shopping-list</View>
}
