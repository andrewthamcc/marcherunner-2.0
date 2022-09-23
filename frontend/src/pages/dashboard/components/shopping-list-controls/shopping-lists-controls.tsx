import React from 'react'
import { SearchInput } from '../../../../components/search-input'

interface Props {
  handleSearch: (search: string) => void
}

export const ShoppingListControls: React.FC<Props> = ({ handleSearch }) => {
  return (
    <div className="shopping-list-controls">
      <SearchInput
        id="shopping-list-search"
        name="shopping-list-search"
        onSearch={handleSearch}
        placeholder="Search"
      />
    </div>
  )
}
