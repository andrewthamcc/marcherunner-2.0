import React, { useEffect, useState } from 'react'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryControls, CategoryItem } from '..'
import { CategoryListContainer, HR, NothingHere } from './style'

interface Props {
  category: Dashboard_groceryCategories
  items: Dashboard_items[]
}

export const CategoryList: React.FC<Props> = ({ category, items }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false)

  useEffect(() => {
    if (!items.length) setIsDeleteVisible(false)
  }, [items])

  return (
    <CategoryListContainer>
      <CategoryControls
        category={category}
        hideDelete={() => setIsDeleteVisible(false)}
        isDeleteVisible={isDeleteVisible}
      />
      <HR />
      {!items.length ? (
        <NothingHere>Nothing here...</NothingHere>
      ) : (
        items.map((i) => (
          <CategoryItem
            isDeleteVisible={isDeleteVisible}
            item={i}
            key={i.id}
            showDelete={() => setIsDeleteVisible(true)}
          />
        ))
      )}
    </CategoryListContainer>
  )
}
