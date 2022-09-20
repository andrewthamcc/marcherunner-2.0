import React from 'react'
import { render } from '@testing-library/react'
import { CategoryIcon, CATEGORY_ICONS } from './category-icon'

describe('Symbols', () => {
  const customRender = () => (
    <div>
      {CATEGORY_ICONS.map((c, index) => (
        <CategoryIcon icon={c} key={index} />
      ))}
    </div>
  )

  test('renders', () => {
    render(customRender())
  })
})
