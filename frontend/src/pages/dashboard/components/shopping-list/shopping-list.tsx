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
}

export const ShoppingList: React.FC<Props> = ({ items, categories }) => {
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
      <ShoppingListControls handleSearch={handleSearch} />
      {searchedItems ? (
        <SearchedList items={searchedItems} />
      ) : (
        <div className="shopping-list-grid">
          {filteredCategories.map((c) => {
            const categoryItems = items.filter((i) => i.categoryId === c.id)

            return (
              <CategoryList category={c} items={categoryItems} key={c.id} />
            )
          })}
        </div>
      )}
    </div>
  )
}
