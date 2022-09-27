import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { createCache } from '../../../../apollo'
import { ToastProvider } from '../../../../components'
import { BAKERY_ID, USER_ID } from '../../../../__mocks__/constants'
import { CategoryItem } from './category-item'
import { DELETE_ITEM } from './use-delete-item'
import { UPDATE_ITEM } from './use-update-item'

const ITEM_ID = 'f2ad18d3-1e78-47fb-9fe2-75cb6ecafc3e'

let updateMutationCalled = false
let deleteMutationCalled = false
const updateMock = {
  request: {
    query: UPDATE_ITEM,
    variables: {
      id: ITEM_ID,
    },
  },
  result: () => {
    updateMutationCalled = true
    const updateItem = {
      __typename: 'Item',
      id: ITEM_ID,
      name: 'cookies',
      userId: USER_ID,
      categoryId: BAKERY_ID,
      purchased: true,
    }

    return { data: updateItem }
  },
}

const deleteMock = {
  request: {
    query: DELETE_ITEM,
    variables: {
      id: ITEM_ID,
    },
  },
  result: () => {
    deleteMutationCalled = true
    const deleteItem = {
      __typename: 'Item',
      id: ITEM_ID,
      name: 'cookies',
      userId: USER_ID,
      categoryId: BAKERY_ID,
      purchased: false,
    }

    return { data: deleteItem }
  },
}

describe('Category Item', () => {
  const customRender = (purchased = false, mocks: MockedResponse[] = []) => {
    const item = {
      __typename: 'Item',
      id: ITEM_ID,
      name: 'cookies',
      userId: USER_ID,
      categoryId: BAKERY_ID,
      purchased,
    }

    return (
      <MockedProvider addTypename cache={createCache()} mocks={mocks}>
        <ToastProvider>
          <CategoryItem item={item} />
        </ToastProvider>
      </MockedProvider>
    )
  }

  it('renders', () => {
    render(customRender())
    expect(screen.getByText(/cookies/i)).toBeInTheDocument()
  })

  it('does not render a checked box if not purchased', () => {
    render(customRender())
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders a checked box if purchased', () => {
    render(customRender(true))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls the update mutation', async () => {
    render(customRender(undefined, [updateMock]))

    fireEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(updateMutationCalled).toEqual(true)
    })
  })

  it('calls the delete mutation', async () => {
    render(customRender(undefined, [deleteMock]))

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(deleteMutationCalled).toEqual(true)
    })
  })
})
