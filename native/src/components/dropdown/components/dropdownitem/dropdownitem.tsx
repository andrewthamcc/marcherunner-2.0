import React from 'react'
import { Pressable } from 'react-native'
import { Text } from '../../../text'
import { DropItem } from '../../dropdown'
import { Item, ItemIcon } from './style'

interface Props {
  closeDropdown: () => void
  item: DropItem
  onChange: (item: DropItem) => void
}

export const DropdownItem: React.FC<Props> = ({
  closeDropdown,
  item,
  onChange,
}) => {
  return (
    <Pressable
      disabled={item.disabled}
      onPress={() => {
        onChange(item)
        closeDropdown()
      }}
    >
      <Item>
        {item.icon && <ItemIcon>{item.icon}</ItemIcon>}
        <Text fontWeight={500}>{item.label}</Text>
      </Item>
    </Pressable>
  )
}
