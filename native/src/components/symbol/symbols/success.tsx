import React from 'react'
import Svg, { G, Circle, Rect } from 'react-native-svg'

export const Success: React.FC = () => {
  return (
    <Svg viewBox="0 0 18 18">
      <G fill="none" fill-rule="evenodd">
        <Circle cx="9" cy="9" r="9" fill="#18bc33" />
        <G fill="#FFF" transform="rotate(45 .97 13.962)">
          <Rect width="2" height="8" x="3" rx=".5" />
          <Rect
            width="2"
            height="5"
            x="1.5"
            y="4.5"
            rx=".5"
            transform="rotate(90 2.5 7)"
          />
        </G>
      </G>
    </Svg>
  )
}
