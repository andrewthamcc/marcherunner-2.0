import React from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import { CategoryControls, CategoryItem } from '..'

interface Props {
  items: Dashboard_items[]
  category: Dashboard_groceryCategories
}

export const CategoryList: React.FC<Props> = ({ category, items }) => {
  return (
    <div className="category-list">
      <div className="category-list-header">
        <CategoryControls category={category} />
      </div>
      <ul>
        {items.map((i) => (
          <CategoryItem item={i} key={i.id} />
        ))}
      </ul>
    </div>
  )
}
