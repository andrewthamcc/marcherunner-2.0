import React from 'react'
import './style.scss'

export const TEXT_VARIANTS = [
  'body-copy',
  'body-copy-small',
  'body-copy-xsmall',
  'body-copy-large',
  'body-copy-xlarge',
] as const
export type TextVariant = typeof TEXT_VARIANTS[number]

export const COLOR_VARIANTS = [
  'black',
  'red',
  'green',
  'orange',
  'white',
] as const
export type ColorVariant = typeof COLOR_VARIANTS[number]

export interface TextProps {
  align?: 'left' | 'center' | 'right'
  className?: string
  color?: ColorVariant
  span?: boolean
  variant?: TextVariant
}

export const Text: React.FC<TextProps> = ({
  align = 'left',
  className = '',
  color = 'black',
  children,
  span = false,
  variant = 'body-copy',
}) => {
  if (span)
    return (
      <span className={`text ${className} ${color} ${variant}`}>
        {children}
      </span>
    )

  return (
    <p className={`text ${className} ${align} ${color} ${variant}`}>
      {children}
    </p>
  )
}
