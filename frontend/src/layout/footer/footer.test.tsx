import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('footer', () => {
  it('renders', () => {
    render(<Footer />)

    expect(screen.getByText(/andrew tham/i)).toBeInTheDocument()
  })
})
