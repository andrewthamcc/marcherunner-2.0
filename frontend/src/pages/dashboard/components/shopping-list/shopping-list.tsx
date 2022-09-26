import React, { useState } from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import { CategoryList, SearchedList, ShoppingListControls } from '..'
import './style.scss'

interface Props {
  items: Dashboard_items[]
  categories: Dashboard_groceryCategories[]
  userId: string
}

export const ShoppingList: React.FC<Props> = ({
  items,
  categories,
  userId,
}) => {
  const [searchedItems, setSearchedItems] = useState<null | Dashboard_items[]>(
    null
  )

  const handleSearch = (search: string) => {
    if (search === '') {
      setSearchedItems(null)
      return
    }

    const res = items.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    )
    setSearchedItems(res)
  }

  const filteredCategories = categories
    .filter((c) => !['all', 'list'].includes(c.categoryName))
    .sort((a, b) => a.categoryName.localeCompare(b.categoryName))

  return (
    <div className="shopping-list">
      <ShoppingListControls
        handleSearch={handleSearch}
        hasItems={items.length > 0}
        hasPurchasedItems={items.filter((i) => i.purchased).length > 0}
      />
      {searchedItems ? (
        <SearchedList items={searchedItems} />
      ) : (
        <div className="shopping-list-grid">
          {filteredCategories.map((c) => {
            const categoryItems = items.filter((i) => i.categoryId === c.id)

            return (
              <CategoryList
                category={c}
                isEmpty={!categoryItems.length}
                items={categoryItems}
                key={c.id}
                userId={userId}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
