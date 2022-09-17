import React from 'react'
import { render } from '@testing-library/react'
import { CategoryIcons, CATEGORY_ICONS } from './category-icons'

describe('Symbols', () => {
  const customRender = () => (
    <div>
      {CATEGORY_ICONS.map((c, index) => (
        <CategoryIcons icon={c} key={index} />
      ))}
    </div>
  )

  test('renders', () => {
    render(customRender())
  })
})
