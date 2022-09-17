import React from 'react'
import { Button } from '../../..'
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
      <Button label={item.label} onClick={() => onChange(item)} plain>
        <span className="dropdown-item-icon">{item.icon}</span>
        <span className="dropdown-item-text">{item.label}</span>
      </Button>
    </li>
  )
}
