import React from 'react'
import { ColorValues } from '../../theme'
import './style.scss'

export interface ButtonProps {
  a11ylabel?: string
  border?: boolean
  className?: string // passthrough for className
  color?: ColorValues
  disabled?: boolean
  label: string
  plain?: boolean
  onClick?: () => void
  type?: 'submit' | 'button'
  width?: number
}

export const Button: React.FC<ButtonProps> = ({
  a11ylabel = '',
  border = false,
  children,
  className = '',
  color = 'green',
  disabled = false,
  label,
  plain = false,
  onClick,
  type = 'button',
  width,
}) => {
  const calcWidth = children ? 'auto' : `${width}px`

  return (
    <button
      aria-label={a11ylabel}
      className={`button 
    ${border ? '' : 'no-border'} 
    ${className ? className : ''} 
    ${color ? color : ''} 
    ${disabled ? 'disabled' : ''}
    ${plain || children ? 'plain no-border' : ''}`}
      disabled={disabled}
      name={label}
      onClick={onClick}
      style={{ width: calcWidth }}
      type={type}
    >
      {children}
      <span className={`button-text ${children ? 'none' : ''}`}>{label}</span>
    </button>
  )
}
