import React from 'react'
import { ColorValues } from '../../theme'
import { Icon, IconVariants } from '../icon'
import './style.scss'

export interface IconButtonProps {
  a11ylabel: string
  className?: string // passthrough for className
  color?: ColorValues
  disabled?: boolean
  icon: IconVariants
  onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
  a11ylabel,
  className,
  color = 'grey',
  disabled = false,
  icon,
  onClick,
}) => {
  return (
    <button
      aria-label={a11ylabel}
      className={`icon-button ${className ? className : ''} ${
        disabled ? 'disabled' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icon color={disabled ? 'grey' : color} icon={icon} />}
    </button>
  )
}
