import React from 'react'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { CategoryControls } from '../category-controls'
import { CategoryItem } from '../category-item'
import { CategoryListContainer, Italic, HR } from './style'

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
        <Italic align="center" variant="body-copy-xsmall">
          Nothing here...
        </Italic>
      ) : (
        items.map((item) => (
          <CategoryItem
            handleSelectItems={handleSelectItems}
            isDeleting={isDeleting}
            item={item}
            key={item.id}
            selectedItems={selectedItems}
            showDelete={showDelete}
          />
        ))
      )}
    </CategoryListContainer>
  )
}
