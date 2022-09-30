import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const List: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48">
      <Path fill="#B2EBF2" d="M7 4H41V44H7z"></Path>
      <Path
        fill="#00ACC1"
        d="M13 26H17V30H13zM13 18H17V22H13zM13 34H17V38H13zM13 10H17V14H13zM21 26H35V30H21zM21 18H35V22H21zM21 34H35V38H21zM21 10H35V14H21z"
      ></Path>
    </Svg>
  )
}
