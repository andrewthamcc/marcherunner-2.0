import React, { useState, useRef, useEffect } from 'react'
import { Button, Icon } from '..'
import { useOutsideClick } from '../../hooks'
import { DropdownList } from './components'
require('./style.scss')

export interface DropItem {
  disabled?: boolean
  icon?: JSX.Element
  label: string
  value: string | number
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
  listWidth = 200,
  onChange,
  value,
  width = 200,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0, width: 0 }) // coordinates to open dropdown list
  const dropdownRef = useRef<null | HTMLDivElement>(null) // ref of dropdown list for coordinates
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
    <Button
      className={`dropdown-wrapper ${className ? className : ''}`}
      disabled={disabled}
      label={label || ''}
      onClick={() => {
        if (disabled) return
        setIsOpen(!isOpen)
      }}
      plain
      width={width}
    >
      {!!label && <label className="dropdown-label">{label}</label>}

      <div
        className={`dropdown 
          ${isOpen ? 'open' : ''} 
          ${disabled ? 'disabled' : ''}
        `}
        ref={dropdownRef}
        tabIndex={0}
      >
        {!!value?.icon && <span className="dropdown-icon">{value.icon}</span>}
        <span className="dropdown-text">
          {!value ? placeholder : value.label}
        </span>
        <span className="dropdown-caret">
          <Icon icon="caret down" />
        </span>

        <DropdownList
          coords={coords}
          isOpen={isOpen}
          list={list}
          listWidth={listWidth}
          onChange={onChange}
        />
      </div>
    </Button>
  )
}
