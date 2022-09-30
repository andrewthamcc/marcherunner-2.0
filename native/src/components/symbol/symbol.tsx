import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
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

interface StyledProps {
  width?: number
  height?: number
}

export interface SymbolProps extends StyledProps {
  symbol: SymbolVariants
}

const StyledIconView = styled(View)<StyledProps>`
  height: ${({ height }) => (height ? height : height)}px;
  width: ${({ width }) => (width ? width : width)}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Symbol: React.FC<SymbolProps> = ({
  height = 20,
  symbol,
  width = 20,
}) => {
  const SVG = symbolVariants[symbol]

  return (
    <StyledIconView height={height} width={width}>
      <SVG />
    </StyledIconView>
  )
}
