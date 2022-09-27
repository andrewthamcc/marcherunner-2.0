import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { MockedProvider } from '@apollo/client/testing'
import { ToastProvider } from '../../../../components'
import { groceryCategoriesMock } from '../../../../__mocks__'
import { ShoppingListControls } from './shopping-lists-controls'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ result: 'Deleted!' }),
  })
) as jest.Mock

describe('Searched List', () => {
  const searchfn = jest.fn()
  const filterfn = jest.fn()

  const customRender = (hasPurchasedItems = false, hasItems = false) => {
    return (
      <MockedProvider>
        <ToastProvider>
          <ShoppingListControls
            categories={groceryCategoriesMock}
            handleFilter={filterfn}
            handleSearch={searchfn}
            hasItems={hasItems}
            hasPurchasedItems={hasPurchasedItems}
          />
        </ToastProvider>
      </MockedProvider>
    )
  }

  it('renders', () => {
    render(customRender())
  })

  it('calls the search function', async () => {
    const SEARCH_TEXT = 'searchy search'

    render(customRender())
    act(() => {
      fireEvent.change(screen.getByRole(/textbox/i), {
        target: { value: SEARCH_TEXT },
      })
    })

    await new Promise((r) => setTimeout(r, 1000))
    expect(searchfn).toHaveBeenCalled()
    expect(searchfn).toHaveBeenCalledWith(SEARCH_TEXT)
  })

  it('has disabled delete buttons without items', () => {
    render(customRender())

    expect(screen.getByLabelText(/delete all/i)).toBeDisabled()
    expect(screen.getByLabelText(/delete purchased/i)).toBeDisabled()
  })

  it('has enabled delete buttons with items', () => {
    render(customRender(true, true))

    expect(screen.getByLabelText(/delete all/i)).toBeEnabled()
    expect(screen.getByLabelText(/delete purchased/i)).toBeEnabled()
  })

  it.skip('calls the delete buttons', async () => {
    render(customRender(true, true))

    fireEvent.click(screen.getByLabelText(/delete all/i))
    fireEvent.click(screen.getByLabelText(/delete purchased/i))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2)
    })
  })
})
