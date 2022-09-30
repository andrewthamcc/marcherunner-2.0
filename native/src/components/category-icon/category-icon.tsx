import React from 'react'
import { View } from 'react-native'
import {
  All,
  Bakery,
  Beverage,
  Dairy,
  Dry,
  Frozen,
  Household,
  List,
  Meat,
  Pharmacy,
  Prepared,
  Produce,
  Seafood,
  Snacks,
} from './icons'
import styled from 'styled-components/native'

export const CATEGORY_ICONS = [
  'all',
  'bakery',
  'beverage',
  'dairy',
  'dry',
  'frozen',
  'household',
  'list',
  'meat',
  'pharmacy',
  'prepared',
  'produce',
  'seafood',
  'snacks',
] as const
export type CategoryVariants = typeof CATEGORY_ICONS[number]

const categoryVariants: Record<CategoryVariants, React.FC> = {
  all: All,
  bakery: Bakery,
  beverage: Beverage,
  dairy: Dairy,
  dry: Dry,
  frozen: Frozen,
  household: Household,
  list: List,
  meat: Meat,
  pharmacy: Pharmacy,
  prepared: Prepared,
  produce: Produce,
  seafood: Seafood,
  snacks: Snacks,
}

interface StyledProps {
  width?: number
  height?: number
}

interface CategoryIconProps extends StyledProps {
  icon: CategoryVariants
}

const StyledCategoryIconView = styled(View)<StyledProps>`
  height: ${({ height }) => (height ? height : height)}px;
  width: ${({ width }) => (width ? width : width)}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  height = 40,
  icon,
  width = 40,
}) => {
  const SVG = categoryVariants[icon]

  return (
    <StyledCategoryIconView height={height} width={width}>
      <SVG />
    </StyledCategoryIconView>
  )
}
