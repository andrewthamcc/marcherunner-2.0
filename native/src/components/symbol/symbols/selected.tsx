import React from 'react'
import Svg, { Circle } from 'react-native-svg'

export const Selected: React.FC = () => {
  return (
    <Svg viewBox="0 0 18 18">
      <Circle
        cx="9"
        cy="9"
        r="8.5"
        fill="#FFF"
        fill-rule="evenodd"
        stroke="#18bc33"
      />
      <Circle cx="9" cy="9" r="6" fill="#18bc33" stroke="#18bc33" />
    </Svg>
  )
}
