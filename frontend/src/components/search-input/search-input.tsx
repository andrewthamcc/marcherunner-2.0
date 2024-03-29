import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks'
import { Icon } from '../icon'
import { IconButton } from '../icon-button'
import './style.scss'

export interface SearchInputProps {
  className?: string // passthrough for className
  disabled?: boolean // prop to disable input
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string // label name
  onSearch: (searchValue: string) => void
  placeholder?: string // placeholder text
  searchDelay?: number
  tabIndex?: number // passthrough for tab index
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  disabled,
  id,
  name,
  label,
  onSearch,
  placeholder,
  searchDelay = 600,
  tabIndex,
}) => {
  const [hasSearched, setHasSearched] = useState(false)
  const [value, setValue] = useState('')
  const debouncedSearchText = useDebounce(value, searchDelay)

  useEffect(() => {
    // only call if the user has searched
    if (!value && hasSearched) onSearch('')
  }, [value, hasSearched])

  useEffect(() => {
    if (debouncedSearchText) onSearch(debouncedSearchText)
  }, [debouncedSearchText])

  return (
    <div className={`search-input ${className ? className : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="search-input-icon-container">
        <input
          className={className}
          disabled={disabled}
          id={id}
          name={name}
          onChange={(e) => {
            if (!hasSearched) setHasSearched(true)
            setValue(e.target.value)
          }}
          placeholder={placeholder}
          spellCheck={false}
          tabIndex={tabIndex}
          type="text"
          value={value}
        />
        {value ? (
          <IconButton
            a11ylabel="clear search"
            className="search-input-icon"
            color="red"
            icon="close"
            onClick={() => {
              setValue('')
              onSearch('')
            }}
          />
        ) : (
          <Icon className="search-input-icon" icon="search" />
        )}
      </div>
    </div>
  )
}
