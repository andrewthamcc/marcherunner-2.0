import React from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import { Text } from '../../../../components'
import { CategoryControls, CategoryItem } from '..'
import './style.scss'

interface Props {
  items: Dashboard_items[]
  category: Dashboard_groceryCategories
}

export const CategoryList: React.FC<Props> = ({ category, items }) => {
  return (
    <div className="category-list">
      <CategoryControls category={category} />
      <hr />
      {!items.length ? (
        <Text align="center" variant="body-copy-small">
          Nothing here...
        </Text>
      ) : (
        <ul>
          {items.map((i) => (
            <CategoryItem item={i} key={i.id} />
          ))}
        </ul>
      )}
    </div>
  )
}
