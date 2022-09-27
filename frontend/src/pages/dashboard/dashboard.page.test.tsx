import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'
import { ToastProvider } from '../../components'
import { groceryCategoriesMock } from '../../__mocks__'
import { DASHBOARD_QUERY } from './query'
import { Dashboard } from '.'

const ERROR_TEXT = 'oh no!'

const errorMock = {
  request: {
    query: DASHBOARD_QUERY,
  },
  error: new Error(ERROR_TEXT),
}

const noDataMock = {
  request: {
    query: DASHBOARD_QUERY,
  },
  result: {
    data: null,
  },
}

const dashboardMock = {
  request: {
    query: DASHBOARD_QUERY,
  },
  result: {
    data: {
      groceryCategories: groceryCategoriesMock,
      items: [],
    },
  },
}

const customRender = (mocks: MockedResponse[]) => {
  return (
    <MemoryRouter>
      <MockedProvider addTypename mocks={mocks}>
        <ToastProvider>
          <Dashboard />
        </ToastProvider>
      </MockedProvider>
    </MemoryRouter>
  )
}

describe('Dashboard', () => {
  it('renders a loading state', () => {
    render(customRender([]))
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('renders an error state', async () => {
    render(customRender([errorMock]))

    await waitFor(() =>
      expect(screen.getByText(ERROR_TEXT)).toBeInTheDocument()
    )
  })

  it('handles null data state', async () => {
    render(customRender([noDataMock]))

    await waitFor(() =>
      expect(
        screen.getByText(/Something has gone very very wrong/i)
      ).toBeInTheDocument()
    )
  })

  it('renders a shoping list', async () => {
    render(customRender([dashboardMock]))

    await waitFor(() => {
      expect(screen.getAllByRole('button', { name: /all/i })).toHaveLength(1)

      expect(screen.getAllByText(/nothing here/i)).toHaveLength(
        groceryCategoriesMock.length - 1
      )
    })
  })
})
