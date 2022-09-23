import React from 'react'
import { CategoryIcon, Text } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'

interface Props {
  items: Dashboard_items[]
}

export const SearchedList: React.FC<Props> = ({ items }) => {
  return (
    <div className="searched-items">
      <div className="searched-items-header">
        <CategoryIcon icon="all" /> <Text>Search Results</Text>
      </div>
      <hr />
      {items.length === 0 && <Text>No results...</Text>}
      {items.map((i) => i.name)}
    </div>
  )
}