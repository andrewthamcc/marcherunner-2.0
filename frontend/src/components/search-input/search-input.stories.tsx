import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { SearchInput } from './search-input'

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
} as Meta

export const Simple = () => {
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (search: string) => {
    console.log(search)
    if (search) setIsSearching(true)
    else setIsSearching(false)
  }

  return (
    <>
      <SearchInput
        id="story-text-input"
        label="Search Input"
        name="story-text-input"
        onSearch={(search) => handleSearch(search)}
      />
      {isSearching && <p>Searching...</p>}
    </>
  )
}
