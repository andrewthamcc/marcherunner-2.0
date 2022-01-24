import React from 'react'
import { ColorValues } from '../../theme'
import { ReactComponent as Close } from './assets/close.svg'
import './style.scss'

export const ICON_TYPES = ['close'] as const
export type IconVariants = typeof ICON_TYPES[number]

const iconVariants: Record<IconVariants, React.FC> = {
  close: Close,
}

interface IconProps {
  className?: string
  color?: ColorValues
  icon: IconVariants
}

export const Icon: React.FC<IconProps> = ({
  className,
  color = 'grey',
  icon,
}) => {
  const SVG = iconVariants[icon]

  return (
    <div className={`icon ${className ? className : ''} ${color ? color : ''}`}>
      <SVG />
    </div>
  )
}
