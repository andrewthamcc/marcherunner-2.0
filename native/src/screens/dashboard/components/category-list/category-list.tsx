import React from 'react'
import { View } from 'react-native'
import { Dashboard_items } from '../../types/Dashboard'
import { CategoryItem } from '../category-item'

interface Props {
  items: Dashboard_items[]
}

export const CategoryList: React.FC<Props> = ({ items }) => {
  return (
    <View>
      {items.map((i) => (
        <CategoryItem key={i.id} item={i} />
      ))}
    </View>
  )
}
