import React from 'react'
import { ColorValues } from '../../theme'
import { Icon, IconVariants } from '../icon'
import './style.scss'

export interface IconButtonProps {
  className?: string // passthrough for className
  color?: ColorValues
  disabled?: boolean
  icon: IconVariants
  onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  color = 'grey',
  disabled = false,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`icon-button ${className ? className : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} color={color} />}
    </button>
  )
}
