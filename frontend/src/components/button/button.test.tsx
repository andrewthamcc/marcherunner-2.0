import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, ButtonProps } from './button'

describe('button component', () => {
  const clickfn = jest.fn()
  const customRender = (props: Partial<ButtonProps>) => <Button {...props} />

  test('renders a button', () => {
    render(customRender({ label: 'my button' }))
    const button = screen.getByRole('button', { name: /my button/i })
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
    expect(clickfn).toBeCalledTimes(1)
  })

  test('renders a disabled button', () => {
    render(customRender(true))
    const button = screen.getByRole('button', { name: /my button/i })
    expect(button).toBeDisabled()
  })

  test('has a class name passed to it', () => {
    render(customRender(undefined, 'my-class'))
    const button = screen.getByRole('button', { name: /my button/i })
    expect(button.classList.contains('my-class')).toBe(true)
  })
})
