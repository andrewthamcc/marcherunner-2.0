import React, { useState } from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import { CategoryList, SearchedList, ShoppingListControls } from '..'

interface Props {
  items: Dashboard_items[]
  categories: Dashboard_groceryCategories[]
}

export const ShoppingList: React.FC<Props> = ({ items, categories }) => {
  const [searchedItems, setSearchedItems] = useState<null | Dashboard_items[]>(
    null
  )

  const handleSearch = (search: string) => {
    if (!search) setSearchedItems(null)

    const res = items.filter((i) => i.name.includes(search))
    setSearchedItems(res)
  }

  if (searchedItems) {
    return <SearchedList items={searchedItems} />
  }

  return (
    <div className="shopping-list">
      <ShoppingListControls handleSearch={handleSearch} />
      {categories.map((c) => {
        const categoryItems = items.filter((i) => i.categoryId === c.id)

        return <CategoryList category={c} items={categoryItems} key={c.id} />
      })}
    </div>
  )
}
