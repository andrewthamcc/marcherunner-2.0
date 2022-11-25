import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { CategoryVariants, ToastProvider } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { BAKERY_ID } from '../../../../__mocks__/constants'
import { itemsMock } from '../../../../__mocks__'
import { getCategoryTitle } from '../../../../utils'
import { CategoryList } from './category-list'

describe('Category List', () => {
  const bakeryCategory = {
    __typename: 'GroceryCategory',
    id: BAKERY_ID,
    categoryName: 'bakery',
  }

  const customRender = (items: Dashboard_items[] = [], isEmpty = false) => {
    return (
      <MockedProvider>
        <ToastProvider>
          <CategoryList
            category={bakeryCategory}
            isEmpty={isEmpty}
            items={items}
          />
        </ToastProvider>
      </MockedProvider>
    )
  }

  it('renders', () => {
    render(customRender())
    expect(
      screen.getByText(
        getCategoryTitle(bakeryCategory.categoryName as CategoryVariants)
      )
    ).toBeInTheDocument
  })

  it('renders an empty list', () => {
    render(customRender())
    expect(screen.getByText(/nothing here/i)).toBeInTheDocument()
  })

  it('renders a list of items', () => {
    render(customRender(itemsMock))
    expect(screen.getAllByRole('checkbox')).toHaveLength(itemsMock.length)

    itemsMock.forEach((i) => {
      expect(screen.getByText(i.name)).toBeInTheDocument()
    })
  })

  it('has the correct empty className', () => {
    const { container } = render(customRender([], true))
    expect(container.firstChild).toHaveClass('empty')
  })
})
