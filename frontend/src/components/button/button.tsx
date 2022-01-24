import React from 'react'
import { ColorValues } from '../../theme'
import './style.scss'

export interface ButtonProps {
  border?: boolean
  label: string
  className?: string // passthrough for className
  color?: ColorValues
  disabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  border = false,
  className = '',
  color = 'green',
  disabled = false,
  label,
  onClick,
}) => {
  return (
    <button
      name={label}
      disabled={disabled}
      className={`button 
        ${border ? '' : 'no-border'} 
        ${className ? className : ''} 
        ${color ? color : ''} 
        ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
    >
      <span className="button-text">{label}</span>
    </button>
  )
}
