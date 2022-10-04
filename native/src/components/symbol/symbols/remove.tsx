import React from 'react'
import Svg, { G, Circle, Rect } from 'react-native-svg'

export const Remove: React.FC = () => {
  return (
    <Svg viewBox="0 0 18 18">
      <G fill="none" fill-rule="evenodd">
        <Circle cx="9" cy="9" r="9" fill="#FECCE0" />
        <Rect
          width="8"
          height="2"
          x="5"
          y="8"
          fill="#FA0164"
          fill-rule="nonzero"
          rx=".5"
        />
      </G>
    </Svg>
  )
}
