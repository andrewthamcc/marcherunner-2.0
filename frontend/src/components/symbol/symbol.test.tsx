import React from 'react'
import { render} from '@testing-library/react'
import { Symbol, SYMBOL_TYPES } from './symbol'

describe('Symbols', () => {
  const customRender = () => (
    <div>
      {SYMBOL_TYPES.map((symbol, index) => <Symbol key={index} symbol={symbol} />)}
    </div>
  )
  
  test('renders', () => {
    render(customRender())
  })
})