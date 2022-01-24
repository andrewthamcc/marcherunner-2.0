import React from 'react'
import { ReactComponent as ErrorSymbol } from './assets/error.svg'
import { ReactComponent as Info } from './assets/info.svg'
import { ReactComponent as Selected } from './assets/selected.svg'
import { ReactComponent as Success } from './assets/success.svg'
import { ReactComponent as Unselected } from './assets/unselected.svg'
import { ReactComponent as Warning } from './assets/warning.svg'

require('./style.scss')

export const SYMBOL_TYPES = [
  'error',
  'info',
  'selected',
  'success',
  'unselected',
  'warning',
] as const
export type SymbolVariants = typeof SYMBOL_TYPES[number]

const symbolVariants: Record<SymbolVariants, React.FC> = {
  error: ErrorSymbol,
  info: Info,
  selected: Selected,
  success: Success,
  unselected: Unselected,
  warning: Warning,
}

export interface SymbolProps {
  className?: string // passthrough for className
  symbol: SymbolVariants // symbol
}

// todo: add alt text
export const Symbol: React.FC<SymbolProps> = ({ className, symbol }) => {
  const SVG = symbolVariants[symbol]

  return (
    <div className={`symbol ${className ? className : ''}`}>
      <SVG />
    </div>
  )
}
