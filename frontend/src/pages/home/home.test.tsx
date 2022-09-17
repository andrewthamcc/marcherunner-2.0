import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '.'

const mockLogin = jest.fn()
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => {
    return {
      loginWithPopup: mockLogin,
    }
  },
}))

describe('Home Page', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
  })

  it('calls the sign in from auth0', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const signins = screen.getAllByText(/sign in/i)
    signins.forEach((s) => fireEvent.click(s))

    expect(mockLogin).toBeCalledTimes(signins.length)
  })
})
