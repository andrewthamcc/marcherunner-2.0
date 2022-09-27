import React from 'react'
import { CategoryIcon, Text } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { CategoryItem } from '..'
import './style.scss'

interface Props {
  items: Dashboard_items[]
}

export const SearchedList: React.FC<Props> = ({ items }) => {
  return (
    <div className="searched-items">
      <div className="searched-items-header">
        <CategoryIcon className="searched-items-icon" icon="list" />{' '}
        <Text className="searched-items-title">Search Results</Text>
      </div>
      <hr />
      {items.length === 0 && (
        <Text align="center" variant="body-copy-xsmall">
          No results
        </Text>
      )}
      <ul>
        {items.map((i) => (
          <CategoryItem item={i} key={i.id} />
        ))}
      </ul>
    </div>
  )
}
