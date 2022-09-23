import React from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategory,
} from '../../types/Dashboard'
import { CategoryIcon, CategoryVariants, Text } from '../../../../components'
import { CategoryItem } from '..'

interface Props {
  items: Dashboard_items[]
  category: Dashboard_groceryCategory
}

export const CategoryList: React.FC<Props> = ({ category, items }) => {
  return (
    <div className="category-list">
      <div className="category-list-header">
        <CategoryIcon icon={category.categoryName as CategoryVariants} />
        <Text>{category.categoryName}</Text>
      </div>
      <li>
        {items.map((i) => (
          <CategoryItem item={i} key={i.id} />
        ))}
      </li>
    </div>
  )
}
