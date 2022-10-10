import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { BaseIconProps } from './types'

export const Logout: React.FC<BaseIconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 28 28">
      <G fill={color} fill-rule="evenodd">
        <Path
          fill-rule="nonzero"
          d="M18 3.5V5a.5.5 0 0 0 .5.5H22A1.5 1.5 0 0 1 23.5 7v14a1.5 1.5 0 0 1-1.5 1.5h-3.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5H22a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-3.5a.5.5 0 0 0-.5.5z"
        />
        <Path d="M6.275 12.875l5.943-5.943a.5.5 0 0 0 .007-.707l-.875-.875a.495.495 0 0 0-.703.003l-8.294 8.294a.497.497 0 0 0 0 .706l8.294 8.294c.195.195.51.196.703.003l.875-.875a.496.496 0 0 0-.007-.707l-5.943-5.943h11.221a.502.502 0 0 0 .504-.5v-1.25a.5.5 0 0 0-.504-.5H6.275z" />
      </G>
    </Svg>
  )
}
