import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Personal: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48">
      <Path
        fill="#FFB74D"
        d="M33,14c0,5-4,9-9,9c-5,0-9-4-9-9s4-9,9-9C29,5,33,9,33,14"
      ></Path>
      <Path
        fill="#607D8B"
        d="M42,36.1c0,0-5-10.1-18-10.1C11,26,6,36.1,6,36.1V42h36V36.1z"
      ></Path>
    </Svg>
  )
}
