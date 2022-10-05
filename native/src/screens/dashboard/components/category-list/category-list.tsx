import React from 'react'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { Text } from '../../../../components'
import { CategoryControls, CategoryItem } from '..'
import { CategoryListContainer } from './style'

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
      {!items.length ? (
        <Text align="center" variant="body-copy-xsmall">
          Nothing here...
        </Text>
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
