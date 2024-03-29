import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BaseIconProps } from './types'

export const Search: React.FC<BaseIconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 18 19">
      <Path
        fill={color}
        fill-rule="nonzero"
        d="M8 2a7 7 0 0 1 5.386 11.472l2.735 2.735a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L11.9 14.814A7 7 0 1 1 8 2zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 4z"
      />
    </Svg>
  )
}
