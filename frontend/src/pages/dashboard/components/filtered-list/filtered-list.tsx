import React from 'react'
import { Text } from '../../../../components'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryControls, CategoryItem } from '..'
import './style.scss'

interface Props {
  category: Dashboard_groceryCategories
  items: Dashboard_items[]
  userId: string
}

export const FilteredList: React.FC<Props> = ({ category, items, userId }) => {
  return (
    <div className="filtered-items">
      <CategoryControls category={category} userId={userId} />
      <hr />
      {items.length === 0 && (
        <Text align="center" variant="body-copy-xsmall">
          Nothing here...
        </Text>
      )}
      <ul>
        {items.map((i) => (
          <CategoryItem item={i} key={i.id} />
        ))}
      </ul>
    </div>
  )
}
