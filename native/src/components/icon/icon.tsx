import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
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

interface StyledProps {
  width?: number
  height?: number
}

interface IconProps extends StyledProps {
  color?: ColorValues
  icon: IconVariants
}

const StyledIconView = styled(View)<StyledProps>`
  height: ${({ height }) => (height ? height : height)}px;
  width: ${({ width }) => (width ? width : width)}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Icon: React.FC<IconProps> = ({
  height = 30,
  color = 'white',
  icon,
  width = 30,
}) => {
  const SVG = iconVariants[icon]

  return (
    <StyledIconView height={height} width={width}>
      <SVG color={colors[color]} />
    </StyledIconView>
  )
}
