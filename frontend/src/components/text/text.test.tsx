import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  Text,
  TEXT_VARIANTS,
  COLOR_VARIANTS,
  TextVariant,
  ColorVariant,
} from './text'

describe('Icons', () => {
  const customRender = (
    color: ColorVariant = 'black',
    variant: TextVariant = 'body-copy-small',
    key: number | undefined = undefined
  ) => (
    <Text color={color} key={key} variant={variant}>
      This is the text component
    </Text>
  )

  it('renders', () => {
    render(customRender())
    expect(screen.getByText(/text component/i)).toBeInTheDocument()
  })

  it('renders the color variants', () => {
    COLOR_VARIANTS.forEach((c, index) =>
      render(customRender(c, undefined, index))
    )
  })

  it('renders the size variants', () => {
    TEXT_VARIANTS.forEach((t, index) =>
      render(customRender(undefined, t, index))
    )
  })
})
