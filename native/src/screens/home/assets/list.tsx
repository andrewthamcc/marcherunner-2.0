import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const List: React.FC = () => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path
        d="M 5.5859375 3 L 3.5859375 5 L 2 5 L 2 7 L 4.4140625 7 L 7 4.4140625 L 5.5859375 3 z M 9 5 L 9 7 L 22 7 L 22 5 L 9 5 z M 5.5859375 9 L 3.5859375 11 L 2 11 L 2 13 L 4.4140625 13 L 7 10.414062 L 5.5859375 9 z M 9 11 L 9 13 L 22 13 L 22 11 L 9 11 z M 4 16.5 A 1.5 1.5 0 0 0 2.5 18 A 1.5 1.5 0 0 0 4 19.5 A 1.5 1.5 0 0 0 5.5 18 A 1.5 1.5 0 0 0 4 16.5 z M 9 17 L 9 19 L 22 19 L 22 17 L 9 17 z"
        fill="#ffffff"
      />
    </Svg>
  )
}
