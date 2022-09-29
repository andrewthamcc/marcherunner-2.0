import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Household: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48">
      <Path fill="#e8eaf6" d="M42 38L6 38 6 22 42 22z"></Path>
      <Path fill="#c5cae9" d="M39 21L34 21 34 9 39 9zM6 38H42V43H6z"></Path>
      <Path fill="#b71c1c" d="M24 5L4 22.9 44 22.9z"></Path>
      <Path fill="#d84315" d="M18 27H30V43H18z"></Path>
      <Path
        fill="#ff8a65"
        d="M27.5,34c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-2 C28,34.2,27.8,34,27.5,34z"
      ></Path>
    </Svg>
  )
}
