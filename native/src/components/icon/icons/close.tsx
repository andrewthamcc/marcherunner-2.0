import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { BaseIconProps } from './types'

export const Close: React.FC<BaseIconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 18 19">
      <G fill={color} fill-rule="even">
        <Path
          d="M 14.66,14.24
           C 15.05,14.63 15.05,15.27 14.66,15.66
             14.66,15.66 14.66,15.66 14.66,15.66
             14.27,16.05 13.63,16.05 13.24,15.66
             13.24,15.66 3.34,5.76 3.34,5.76
             2.95,5.37 2.95,4.73 3.34,4.34
             3.34,4.34 3.34,4.34 3.34,4.34
             3.73,3.95 4.37,3.95 4.76,4.34
             4.76,4.34 14.66,14.24 14.66,14.24 Z
           M 13.24,4.34
           C 13.63,3.95 14.27,3.95 14.66,4.34
             14.66,4.34 14.66,4.34 14.66,4.34
             15.05,4.73 15.05,5.37 14.66,5.76
             14.66,5.76 4.76,15.66 4.76,15.66
             4.37,16.05 3.73,16.05 3.34,15.66
             3.34,15.66 3.34,15.66 3.34,15.66
             2.95,15.27 2.95,14.63 3.34,14.24
             3.34,14.24 13.24,4.34 13.24,4.34 Z"
        />
      </G>
    </Svg>
  )
}
