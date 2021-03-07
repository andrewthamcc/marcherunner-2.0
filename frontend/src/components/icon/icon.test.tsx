import React from 'react'
import { render } from '@testing-library/react'
import { Icon, ICON_TYPES } from './icon'

describe('Icons', () => {
  const customRender = () => (
    <div>
      {ICON_TYPES.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </div>
  )

  test('renders', () => {
    render(customRender())
  })
})
