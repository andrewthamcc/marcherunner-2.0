import React from 'react'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './checkbox'

const CustomRender = (checked = false, disabled = false) => {
  const onChangeMock = jest.fn()

  return (
    <Checkbox
      disabled={disabled}
      id="test-check"
      name="test-check"
      checked={checked}
      label="checkbox"
      onChange={onChangeMock}
    />
  )
}

describe('checkbox component', () => {
  it('renders', () => {
    render(CustomRender())
  })

  it('renders a checked input', () => {
    render(CustomRender(true))

    const check = screen.getByRole('checkbox')
    expect(check).toHaveAttribute('checked')
  })

  it('renders disabled checkbox', () => {
    render(CustomRender(undefined, true))
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })
})
