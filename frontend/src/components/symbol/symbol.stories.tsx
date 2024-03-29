import React from 'react'
import { Meta } from '@storybook/react'
import { Symbol, SYMBOL_TYPES } from './symbol'

export default {
  title: 'Atoms/Symbol',
  component: Symbol,
} as Meta

export const symbols: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {SYMBOL_TYPES.map((symbol, index) => (
        <Symbol key={index} symbol={symbol} />
      ))}
    </div>
  )
}
