import React, { useState, useRef, useEffect } from 'react'
import { Button, Icon, Text } from '..'
import { useOutsideClick } from '../../hooks'
import { DropdownList } from './components'
require('./style.scss')

export interface DropItem {
  disabled?: boolean
  icon?: JSX.Element
  label: string
  value: unknown
}

interface DropdownProps {
  className?: string // passthrough for className
  disabled?: boolean
  label?: string // label for dropdown
  list: DropItem[] // array of dropdown items - TypeScript would help with creating a model for this data
  listWidth?: number // optional prop for width of rendered dropdown list
  placeholder?: string
  onChange: (value: DropItem) => void // passthrough for method of changing the value similar usage to onChange
  value: DropItem | null // passthrough for setting value of dropdown
  width?: number // width of dropdown menu
}

interface Coords {
  x: number
  y: number
  width: number
}

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  disabled = false,
  label,
  list,
  placeholder = 'Select',
  listWidth = 275,
  onChange,
  value,
  width = 275,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0, width: 0 })
  const dropdownRef = useRef<null | HTMLDivElement>(null)
  useOutsideClick(dropdownRef, isOpen, () => setIsOpen(false))

  useEffect(() => {
    if (dropdownRef && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      const dropCoords = {
        x: rect.right - rect.width / 2,
        y: rect.bottom + 10 + window.scrollY,
        width: rect.width,
      }
      setCoords(dropCoords)
    }
  }, [dropdownRef])

  return (
    <div
      className={`dropdown-wrapper ${className ? className : ''}`}
      ref={dropdownRef}
      style={{ width: `${width}px` }}
    >
      <Button
        a11ylabel="Category Filter"
        className="dropdown-button"
        disabled={disabled}
        label={label || ''}
        onClick={() => setIsOpen(!isOpen)}
        plain
      >
        {!!label && <label className="dropdown-label">{label}</label>}

        <div
          className={`dropdown 
          ${isOpen ? 'open' : ''} 
          ${disabled ? 'disabled' : ''}
        `}
          tabIndex={0}
        >
          {value?.icon && <div className="dropdown-icon">{value.icon}</div>}
          <Text className="dropdown-text">
            {!value ? placeholder : value.label}
          </Text>
          <Icon className="dropdown-caret" icon="caret down" />
        </div>
        <DropdownList
          coords={coords}
          isOpen={isOpen}
          list={list}
          listWidth={listWidth}
          onChange={onChange}
        />
      </Button>
    </div>
  )
}
