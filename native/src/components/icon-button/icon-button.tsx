import React from 'react'
import { Pressable, PressableProps } from 'react-native'
import { ColorValues } from '../../theme'
import { Icon, IconVariants } from '../icon'

interface IconButtonProps extends PressableProps {
  icon: IconVariants
  height?: number
  color?: ColorValues
  width?: number
}

export const IconButton: React.FC<IconButtonProps> = ({
  color = 'grey',
  height = 20,
  icon,
  width = 20,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      <Icon color={color} height={height} icon={icon} width={width} />
    </Pressable>
  )
}
