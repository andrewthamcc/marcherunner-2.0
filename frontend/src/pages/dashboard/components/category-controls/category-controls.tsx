import React, { useState } from 'react'
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

interface Props {
  category: Dashboard_groceryCategories
}

export const CategoryControls: React.FC<Props> = ({ category }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setItemName('')
    return
  }

  return (
    <div className="category-controls">
      {!isEditing ? (
        <Button label="add item" onClick={() => setIsEditing(true)}>
          <CategoryIcon icon={category.categoryName as CategoryVariants} />
          <Text>{category.categoryName}</Text>
          <Symbol symbol="add green" />
        </Button>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextInput
            id={category.id}
            name={category.categoryName}
            onBlur={() => setIsEditing(false)}
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
          <Button disabled={!itemName} label="add item" type="submit">
            <Symbol symbol={itemName ? 'add green' : 'add disabled'} />
          </Button>
          <IconButton
            a11ylabel="clear"
            icon="close"
            onClick={() => setItemName('')}
          />
        </form>
      )}
    </div>
  )
}
