import React, { useState } from 'react'
import { PressableProps } from 'react-native'
import { colors } from '../../theme'
import { Icon } from '../icon'
import { Text } from '../text'
import { DropdownList } from './components/dropdownlist'
import { DropButton, Item, CaretIcon } from './style'

export interface DropItem {
  disabled?: boolean
  icon?: JSX.Element
  label: string
  value: unknown
}

interface Props extends Pick<PressableProps, 'onFocus' | 'onBlur'> {
  disabled?: boolean
  label?: string
  list: DropItem[]
  placeholder?: string
  onChange: (value: DropItem) => void
  value: DropItem | null
}

export const Dropdown: React.FC<Props> = ({
  disabled = false,
  label,
  list,
  placeholder = 'Select',
  onBlur,
  onChange,
  onFocus,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let borderColor = colors['light-grey']
  if (isFocused) borderColor = colors.green

  return (
    <>
      {label && <Text>{label}</Text>}
      <DropButton
        borderColor={borderColor}
        disabled={disabled}
        onBlur={(e) => {
          setIsFocused(false)

          if (onBlur) onBlur(e)
        }}
        onFocus={(e) => {
          setIsFocused(true)

          if (onFocus) onFocus(e)
        }}
        onPress={() => setIsOpen(!isOpen)}
        {...rest}
      >
        <Item>
          {value?.icon && value.icon}
          <Text>{!value ? placeholder : value.label}</Text>
          <CaretIcon>
            <Icon color="grey" icon="caret down" />
          </CaretIcon>
        </Item>
      </DropButton>
      <DropdownList
        closeDropdown={() => setIsOpen(false)}
        isOpen={isOpen}
        list={list}
        onChange={onChange}
      />
    </>
  )
}
