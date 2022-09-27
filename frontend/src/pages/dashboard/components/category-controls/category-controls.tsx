import React, { ElementRef, useState, useRef } from 'react'
import {
  Button,
  CategoryIcon,
  CategoryVariants,
  IconButton,
  LoadingSpinner,
  Symbol,
  TextInput,
  Text,
} from '../../../../components'
import { Dashboard_groceryCategories } from '../../types/Dashboard'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { useCreateItem } from './use-create-item'
import './style.scss'

interface Props {
  category: Dashboard_groceryCategories
  userId: string
}

type InputHandle = ElementRef<typeof TextInput>

export const CategoryControls: React.FC<Props> = ({ category, userId }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')
  const itemInput = useRef<InputHandle>(null)
  const { createItem, loading } = useCreateItem()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createItem({
      name: itemName,
      userId,
      categoryId: category.id,
    })

    setItemName('')
    if (itemInput && itemInput.current) itemInput.current.focusInput()
  }

  return (
    <div className="category-controls">
      {!isEditing ? (
        <Button
          a11ylabel={`Add item ${category.categoryName}`}
          className="category-controls-header"
          label="add item"
          onClick={() => setIsEditing(true)}
        >
          <CategoryIcon
            className="category-controls-icon"
            icon={category.categoryName as CategoryVariants}
          />
          <Text className="category-controls-title" variant="body-copy-large">
            {getCategoryTitle(category.categoryName as CategoryTitles)}
          </Text>
          <Symbol symbol="add orange" />
        </Button>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <CategoryIcon
              className="category-controls-icon"
              icon={category.categoryName as CategoryVariants}
            />
            <TextInput
              autofocus
              className="category-controls-input"
              disabled={loading}
              id={category.id}
              name={category.categoryName}
              onBlur={() => setIsEditing(false)}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Add an item"
              ref={itemInput}
              value={itemName}
            />
            <div className="category-controls-button-container">
              {loading ? (
                <div className="loading">
                  <LoadingSpinner />
                </div>
              ) : (
                <Button
                  a11ylabel="add item"
                  className="category-controls-add"
                  disabled={!itemName || loading}
                  label="add item"
                  type="submit"
                >
                  <Symbol symbol={itemName ? 'add green' : 'add disabled'} />
                </Button>
              )}
            </div>
          </form>
          <IconButton
            a11ylabel="clear"
            className="category-controls-close"
            color="red"
            disabled={loading}
            icon="close"
            onClick={() => {
              setItemName('')
              setIsEditing(false)
            }}
          />
        </>
      )}
    </div>
  )
}
