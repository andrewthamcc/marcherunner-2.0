import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from './loading-spinner'

describe('Loading spinner', () => {
  test('renders', () => {
    render(<LoadingSpinner />)

    const loading = screen.getByAltText(/loading/i)
    expect(loading).toBeInTheDocument()
  })
})
