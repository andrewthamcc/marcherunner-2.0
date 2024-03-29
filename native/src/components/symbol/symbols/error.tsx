import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Error: React.FC = () => {
  return (
    <Svg viewBox="0 0 18 18">
      <Path
        fill="#FA0164"
        fill-rule="evenodd"
        d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm1.264 12.536H7.752V15h2.512v-2.464zm-.08-8.96H7.816v3.072l.608 4.928H9.56l.624-4.928V3.576z"
      />
    </Svg>
  )
}
