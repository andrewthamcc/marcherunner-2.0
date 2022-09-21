import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'
import { DASHBOARD_QUERY } from './query'
import { Dashboard } from '.'

const ERROR_TEXT = 'oh no!'

const errorMock = {
  request: {
    query: DASHBOARD_QUERY,
  },
  error: new Error(ERROR_TEXT),
}

const customRender = (mocks: MockedResponse[]) => {
  return (
    <MemoryRouter>
      <MockedProvider addTypename mocks={mocks}>
        <Dashboard />
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
})
