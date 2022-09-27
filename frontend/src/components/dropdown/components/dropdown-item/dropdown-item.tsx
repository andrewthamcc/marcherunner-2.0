import React from 'react'
import { Button, Text } from '../../..'
import { DropItem } from '../..'
import './style.scss'

interface Props {
  item: DropItem
  onChange: (item: DropItem) => void
}

export const DropdownItem: React.FC<Props> = ({ item, onChange }) => {
  // remove disabled item from selectable items
  if (item.disabled) {
    return null
  }

  return (
    <li className="dropdown-item" tabIndex={0}>
      <Button
        className="dropdown-item-button"
        label={item.label}
        onClick={() => onChange(item)}
        plain
      >
        <div className="dropdown-item-icon">{item.icon}</div>
        <Text className="dropdown-item-text">{item.label}</Text>
      </Button>
    </li>
  )
}
