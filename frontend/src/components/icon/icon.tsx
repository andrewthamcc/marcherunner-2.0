import React from 'react'
import { ColorValues } from '../../theme'
import { ReactComponent as CaretDown } from './assets/caretDown.svg'
import { ReactComponent as Chevron } from './assets/chevron.svg'
import { ReactComponent as ChevronLeft } from './assets/chevronLeft.svg'
import { ReactComponent as ChevronRight } from './assets/chevronRight.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Gear } from './assets/gear.svg'
import { ReactComponent as Info } from './assets/info.svg'
import { ReactComponent as Logout } from './assets/logout.svg'
import { ReactComponent as Pencil } from './assets/pencil.svg'
import { ReactComponent as Profile } from './assets/profile.svg'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Trash } from './assets/trash.svg'
import './style.scss'

export const ICON_TYPES = [
  'caret down',
  'chevron',
  'chevron left',
  'chevron right',
  'close',
  'gear',
  'info',
  'logout',
  'pencil',
  'profile',
  'search',
  'trash',
] as const
export type IconVariants = typeof ICON_TYPES[number]

const iconVariants: Record<IconVariants, React.FC> = {
  'caret down': CaretDown,
  chevron: Chevron,
  'chevron left': ChevronLeft,
  'chevron right': ChevronRight,
  close: Close,
  gear: Gear,
  info: Info,
  logout: Logout,
  pencil: Pencil,
  profile: Profile,
  search: Search,
  trash: Trash,
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
