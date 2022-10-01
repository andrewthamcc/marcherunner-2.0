import React from 'react'
import { Pressable, PressableProps } from 'react-native'
import { Icon, IconVariants } from '../icon'

interface IconButtonProps extends PressableProps {
  icon: IconVariants
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <Pressable {...rest}>
      <Icon icon={icon} />
    </Pressable>
  )
}
