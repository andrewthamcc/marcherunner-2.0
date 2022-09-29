import React from 'react'
import Svg, { G, Circle, Rect } from 'react-native-svg'

export const AddOrange: React.FC = () => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <G fill="none" fill-rule="evenodd">
        <Circle cx="9" cy="9" r="9" fill="#f59517" />
        <Rect
          width="8"
          height="2"
          x="5"
          y="8"
          fill="#fff"
          fill-rule="nonzero"
          rx=".5"
        />
        <Rect
          width="8"
          height="2"
          x="5"
          y="8"
          fill="#fff"
          fill-rule="nonzero"
          rx=".5"
          transform="rotate(90 9 9)"
        />
      </G>
    </Svg>
  )
}
