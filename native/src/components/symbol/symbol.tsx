import React from 'react'
import {
  AddDisabled,
  AddGreen,
  AddOrange,
  Checkmark,
  Error as ErrorSymbol,
  Info,
  Selected,
  Success,
  Unselected,
  Warning,
} from './symbols'

export const SYMBOL_TYPES = [
  'add disabled',
  'add green',
  'add orange',
  'checkmark',
  'error',
  'info',
  'selected',
  'success',
  'unselected',
  'warning',
] as const
export type SymbolVariants = typeof SYMBOL_TYPES[number]

const symbolVariants: Record<SymbolVariants, React.FC> = {
  'add disabled': AddDisabled,
  'add green': AddGreen,
  'add orange': AddOrange,
  checkmark: Checkmark,
  error: ErrorSymbol,
  info: Info,
  selected: Selected,
  success: Success,
  unselected: Unselected,
  warning: Warning,
}

export interface SymbolProps {
  symbol: SymbolVariants
}

export const Symbol: React.FC<SymbolProps> = ({ symbol }) => {
  const SVG = symbolVariants[symbol]

  return <SVG />
}
