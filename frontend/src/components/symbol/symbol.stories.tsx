import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { StoryBookWrapper } from '../../utils'
import { Symbol, SymbolProps, SYMBOL_TYPES } from './symbol'

export default {
  title: 'Atoms/Symbol',
  component: Symbol,
} as Meta

const Template: Story<SymbolProps> = (args) => (
  <StoryBookWrapper>
    SymbolProps
    <Symbol {...args} />
  </StoryBookWrapper>
)

const style = {
  display: 'flex',
  flexGap: '1rem',
  flexDirection: 'column',
}

export const symbols: React.FC = () => {
  return (
    <div style={style}>
      {SYMBOL_TYPES.map((symbol, index) => (
        <Symbol key={index} symbol={symbol} />
      ))}
    </div>
  )
}
