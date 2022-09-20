import React from 'react'
import { ReactComponent as All } from './assets/allItems.svg'
import { ReactComponent as Bakery } from './assets/bakery.svg'
import { ReactComponent as Beverage } from './assets/beverage.svg'
import { ReactComponent as Dairy } from './assets/dairy.svg'
import { ReactComponent as Dry } from './assets/dry.svg'
import { ReactComponent as Frozen } from './assets/frozen.svg'
import { ReactComponent as Household } from './assets/household.svg'
import { ReactComponent as List } from './assets/list.svg'
import { ReactComponent as Meat } from './assets/meat.svg'
import { ReactComponent as Pharmacy } from './assets/pharmacy.svg'
import { ReactComponent as Prepared } from './assets/prepared.svg'
import { ReactComponent as Produce } from './assets/produce.svg'
import { ReactComponent as Seafood } from './assets/seafood.svg'
import { ReactComponent as Snacks } from './assets/snacks.svg'

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
  className?: string
  icon: CategoryVariants
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  className,
  icon,
}) => {
  const SVG = categoryVariants[icon]

  return (
    <div className={`category-icon ${className ? className : ''} `}>
      <SVG />
    </div>
  )
}
