import React from 'react'
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

interface CategoryIconProps {
  icon: CategoryVariants
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ icon }) => {
  const SVG = categoryVariants[icon]

  return <SVG />
}
