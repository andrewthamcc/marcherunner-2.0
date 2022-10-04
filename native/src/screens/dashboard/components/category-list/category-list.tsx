import React from 'react'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryControls, CategoryItem } from '..'
import { CategoryListContainer, HR, NothingHere } from './style'

interface Props {
  category: Dashboard_groceryCategories
  handleSelectItems: (id: string) => void
  isDeleting: boolean
  items: Dashboard_items[]
  selectedItems: string[]
  showDelete: () => void
}

export const CategoryList: React.FC<Props> = ({
  category,
  handleSelectItems,
  isDeleting,
  items,
  selectedItems,
  showDelete,
}) => {
  return (
    <CategoryListContainer>
      <CategoryControls category={category} isDeleting={isDeleting} />
      <HR />
      {!items.length ? (
        <NothingHere>Nothing here...</NothingHere>
      ) : (
        items.map((i) => (
          <CategoryItem
            handleSelectItems={handleSelectItems}
            isDeleting={isDeleting}
            item={i}
            key={i.id}
            selectedItems={selectedItems}
            showDelete={showDelete}
          />
        ))
      )}
    </CategoryListContainer>
  )
}
