import React from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import { Text } from '../../../../components'
import { CategoryControls, CategoryItem } from '..'
import './style.scss'

interface Props {
  category: Dashboard_groceryCategories
  isEmpty: boolean
  items: Dashboard_items[]
  userId: string
}

export const CategoryList: React.FC<Props> = ({
  category,
  isEmpty,
  items,
  userId,
}) => {
  return (
    <div className={`category-list ${isEmpty && 'empty'}`}>
      <CategoryControls category={category} userId={userId} />
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
