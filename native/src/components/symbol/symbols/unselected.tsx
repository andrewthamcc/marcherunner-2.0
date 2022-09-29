import React from 'react'
import Svg, { Circle } from 'react-native-svg'

export const Unselected: React.FC = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18">
      <Circle
        cx="9"
        cy="9"
        r="8.5"
        fill="#FFF"
        fill-rule="evenodd"
        stroke="#373A4B"
      />
    </Svg>
  )
}
