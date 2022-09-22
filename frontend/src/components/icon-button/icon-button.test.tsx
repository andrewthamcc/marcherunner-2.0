import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { IconButton } from './icon-button'

describe('icon button component', () => {
  const clickfn = jest.fn()
  const customRender = (disabled = false, className = '') => (
    <IconButton
      a11ylabel="close"
      className={className}
      disabled={disabled}
      icon="close"
      onClick={clickfn}
    />
  )

  test('renders an icon button', () => {
    render(customRender())
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
    expect(clickfn).toBeCalledTimes(1)
  })

  test('renders a disabled icon button', () => {
    render(customRender(true))
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('has a class name passed to it', () => {
    render(customRender(undefined, 'my-class'))
    const button = screen.getByRole('button')
    expect(button.classList.contains('my-class')).toBe(true)
  })
})
