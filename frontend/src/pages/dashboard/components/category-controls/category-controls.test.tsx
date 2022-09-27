import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { createCache } from '../../../../apollo'
import { ToastProvider } from '../../../../components'
import { BAKERY_ID, USER_ID } from '../../../../__mocks__/constants'
import { CategoryTitles, getCategoryTitle } from '../../../../utils'
import { CategoryControls } from './category-controls'
import { CREATE_ITEM } from './use-create-item'

const ITEM_ID = 'f2ad18d3-1e78-47fb-9fe2-75cb6ecafc3e'

let createMutationCalled = false
const createMock = {
  request: {
    query: CREATE_ITEM,
    variables: {
      item: {
        name: 'cookies',
        userId: USER_ID,
        categoryId: BAKERY_ID,
      },
    },
  },
  result: () => {
    createMutationCalled = true
    const createItem = {
      __typename: 'Item',
      id: ITEM_ID,
      name: 'cookies',
      userId: USER_ID,
      categoryId: BAKERY_ID,
      purchased: true,
    }

    return { data: createItem }
  },
}

const bakeryCategory = {
  __typename: 'GroceryCategory',
  id: BAKERY_ID,
  categoryName: 'bakery',
}

describe('Category Controls', () => {
  const customRender = (mocks: MockedResponse[] = []) => {
    return (
      <MockedProvider addTypename cache={createCache()} mocks={mocks}>
        <ToastProvider>
          <CategoryControls category={bakeryCategory} userId={USER_ID} />
        </ToastProvider>
      </MockedProvider>
    )
  }

  it('renders', () => {
    render(customRender())
    expect(
      screen.getByText(
        getCategoryTitle(bakeryCategory.categoryName as CategoryTitles)
      )
    ).toBeInTheDocument()
  })

  it('displays the input when clicked', async () => {
    render(customRender())
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByLabelText(/add/i)).toBeDisabled()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('closes the input with the close button', () => {
    render(customRender())
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('textbox')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText(/clear/i))
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('calls the create mutation', async () => {
    render(customRender([createMock]))
    expect(createMutationCalled).toEqual(false)

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    await waitFor(() => {
      act(() => {
        fireEvent.change(screen.getByRole('textbox'), {
          target: { value: 'cookies' },
        })
      })
    })

    expect(screen.getByLabelText(/add/i)).toBeEnabled()
    fireEvent.click(screen.getByLabelText(/add/i))
    await waitFor(() => {
      expect(createMutationCalled).toEqual(true)
    })
  })
})
