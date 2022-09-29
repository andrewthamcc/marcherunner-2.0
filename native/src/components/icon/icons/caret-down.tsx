import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BaseIconProps } from './types'

export const CaretDown: React.FC<BaseIconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill={color} d="M5,9l7,9l7-9H5z"></Path>
    </Svg>
  )
}
