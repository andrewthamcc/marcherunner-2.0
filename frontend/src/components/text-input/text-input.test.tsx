import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { TextInput } from './text-input'

const customRender = (disabled = false, required = false) => {
  const onChangeMock = jest.fn()

  return (
    <TextInput
      disabled={disabled}
      id="test-text-input"
      label="text-input"
      name="test-text-input"
      onChange={onChangeMock}
      required={required}
      value=""
    />
  )
}

describe('text input component', () => {
  it('renders', () => {
    render(customRender())
  })

  it('renders disabled text input', () => {
    render(customRender(true))
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renders an error if required', () => {
    render(customRender(undefined, true))

    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.blur(input)

    expect(screen.getByText(/required/i)).toBeInTheDocument()
  })
})
