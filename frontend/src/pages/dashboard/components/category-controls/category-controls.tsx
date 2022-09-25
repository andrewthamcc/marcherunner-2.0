import React, { useState, useRef } from 'react'
import {
  Button,
  CategoryIcon,
  CategoryVariants,
  IconButton,
  Symbol,
  TextInput,
  Text,
} from '../../../../components'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import './style.scss'

interface Props {
  category: Dashboard_groceryCategories
}

type CategoryTitles = Exclude<CategoryVariants, 'all' | 'list'>

const categoryTiles: Record<CategoryTitles, string> = {
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

export const CategoryControls: React.FC<Props> = ({ category }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')

  const node = useRef<null | HTMLFormElement>(null)

  const handleClearAndCloseEdit = () => {
    setItemName('')
    setIsEditing(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setItemName('')
    return
  }

  return (
    <div className="category-controls">
      {!isEditing ? (
        <Button
          className="category-controls-header"
          label="add item"
          onClick={() => setIsEditing(true)}
        >
          <CategoryIcon
            className="category-controls-icon"
            icon={category.categoryName as CategoryVariants}
          />
          <Text className="category-controls-title" variant="body-copy-xlarge">
            {categoryTiles[category.categoryName as CategoryTitles]}
          </Text>
          <Symbol symbol="add orange" />
        </Button>
      ) : (
        <form onSubmit={handleSubmit} ref={node}>
          <CategoryIcon
            className="category-controls-icon"
            icon={category.categoryName as CategoryVariants}
          />
          <TextInput
            autofocus
            className="category-controls-input"
            id={category.id}
            name={category.categoryName}
            onBlur={() => setIsEditing(false)}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Add an item"
            value={itemName}
          />
          <Button disabled={!itemName} label="add item" type="submit">
            <Symbol symbol={itemName ? 'add green' : 'add disabled'} />
          </Button>
          <IconButton
            a11ylabel="clear"
            color={itemName ? 'red' : 'grey'}
            disabled={!itemName}
            icon="close"
            onClick={handleClearAndCloseEdit}
          />
        </form>
      )}
    </div>
  )
}
