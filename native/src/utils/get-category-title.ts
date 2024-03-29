import { CategoryVariants } from '../components'

export type CategoryTitles = Exclude<CategoryVariants, 'list'>

const categoryTiles: Record<CategoryTitles, string> = {
  all: 'All',
  bakery: 'Bakery',
  beverage: 'Beverages',
  dairy: 'Dairy & Cheese',
  dry: 'Dry & Canned Goods',
  frozen: 'Frozen Foods',
  household: 'Household Items',
  meat: 'Meat',
  pharmacy: 'Pharmacy & Personal Items',
  prepared: 'Deli & Prepared Foods',
  produce: 'Fruits & Vegetables',
  seafood: 'Seafood',
  snacks: 'Snacks',
}

export const getCategoryTitle = (category: CategoryTitles) =>
  categoryTiles[category]
