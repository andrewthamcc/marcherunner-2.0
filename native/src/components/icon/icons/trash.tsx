import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BaseIconProps } from './types'

export const Trash: React.FC<BaseIconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 18 18">
      <Path
        fill={color}
        fill-rule="evenodd"
        d="M15 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6h12zM2.5 4a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H6v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13z"
      />
    </Svg>
  )
}
