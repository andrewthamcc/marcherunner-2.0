import React, { useState } from 'react'
import {
  Dashboard_items,
  Dashboard_groceryCategories,
} from '../../types/Dashboard'
import {
  CategoryList,
  FilteredList,
  SearchedList,
  ShoppingListControls,
} from '..'
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
  const [filteredCategory, setFilteredCategory] =
    useState<Dashboard_groceryCategories | null>(null)

  const handleFilter = (categoryId: string | null) => {
    if (!categoryId) {
      setFilteredCategory(null)
      return
    }

    const category = categories.find((c) => c.id === categoryId)
    setFilteredCategory(category as Dashboard_groceryCategories)
  }

  const handleSearch = (search: string) => {
    if (search === '') {
      setSearchedItems(null)
      return
    }

    const searched = items.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    )
    setSearchedItems(searched)
  }

  const isFiltered = !searchedItems && filteredCategory
  const isSearched = searchedItems && !filteredCategory

  return (
    <div className="shopping-list">
      <ShoppingListControls
        categories={categories}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        hasItems={items.length > 0}
        hasPurchasedItems={items.filter((i) => i.purchased).length > 0}
      />
      {isFiltered && (
        <FilteredList
          category={filteredCategory}
          items={items.filter((i) => i.categoryId === filteredCategory.id)}
          userId={userId}
        />
      )}
      {isSearched && <SearchedList items={searchedItems} />}

      {!isFiltered && !isSearched && (
        <div className="shopping-list-grid">
          {categories
            .filter((c) => c.categoryName !== 'all')
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
            .map((c) => {
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
