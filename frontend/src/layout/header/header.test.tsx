import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '.'

let mockIsAuthenticated = false
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => {
    return {
      isAuthenticated: mockIsAuthenticated,
      loginWithRedirect: jest.fn(),
    }
  },
}))

describe('header', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })

  it('renders sign in if not authenticated', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument
  })

  it('renders logout if authenticated', () => {
    mockIsAuthenticated = true
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument
  })
})
