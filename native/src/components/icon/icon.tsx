import React from 'react'
import { colors, ColorValues } from '../../theme'
import {
  CaretDown,
  CartCheckout,
  CartClear,
  Close,
  Gear,
  Search,
  Trash,
  BaseIconProps,
} from './icons'

export const ICON_TYPES = [
  'caret down',
  'checkout cart',
  'clear cart',
  'close',
  'gear',
  'search',
  'trash',
] as const
export type IconVariants = typeof ICON_TYPES[number]

const iconVariants: Record<IconVariants, React.FC<BaseIconProps>> = {
  'caret down': CaretDown,
  'checkout cart': CartCheckout,
  'clear cart': CartClear,
  close: Close,
  gear: Gear,
  search: Search,
  trash: Trash,
}

interface IconProps {
  color?: ColorValues
  icon: IconVariants
}

export const Icon: React.FC<IconProps> = ({ color = 'white', icon }) => {
  const SVG = iconVariants[icon]

  return <SVG color={colors[color]} />
}
