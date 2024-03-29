import React from 'react'
import Svg, { Path, Rect, Circle } from 'react-native-svg'

export const Beverage: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48">
      <Path
        fill="#558b2f"
        d="M5.72,30.28c-0.928,0.928-0.928,2.432,0,3.36l8.64,8.64c0.928,0.928,2.432,0.928,3.36,0L20,40L8,28 L5.72,30.28z"
      ></Path>
      <Rect
        width="11.314"
        height="16.971"
        x="12.343"
        y="21.515"
        fill="#ffecb3"
        transform="rotate(-45.001 18 30)"
      ></Rect>
      <Path
        fill="#558b2f"
        d="M28,20v-5.998c-4.82,2.424-8.201,2.199-12,5.998l12,12c3.831-3.831,3.62-7.126,6.051-12H28z"
      ></Path>
      <Path
        fill="#558b2f"
        d="M42.7,7.89l-2.586-2.586c-0.391-0.391-1.024-0.391-1.414,0c0,0-1.588,1.479-3.325,3.071 l4.257,4.257c1.59-1.738,3.068-3.328,3.068-3.328C43.09,8.913,43.09,8.28,42.7,7.89z"
      ></Path>
      <Path
        fill="#33691e"
        d="M12.038,36.028c-2.188-2.211-4.85-3.309-6.728-2.961c0.108,0.204,0.238,0.401,0.41,0.573l8.64,8.64 c0.177,0.177,0.379,0.309,0.589,0.418C15.266,40.829,14.191,38.204,12.038,36.028z"
      ></Path>
      <Path
        fill="#ffc107"
        d="M42.7,7.89l-2.586-2.586c-0.391-0.391-1.024-0.391-1.414,0c0,0-7.039,6.558-7.7,6.933 c-1.066,0.727-2.058,1.292-3,1.766V20h6.051c0.468-0.938,1.024-1.929,1.736-3c0.368-0.659,6.912-7.696,6.912-7.696 C43.09,8.913,43.09,8.28,42.7,7.89z"
      ></Path>
      <Circle cx="20.5" cy="27.5" r="5.5" fill="#ffecb3" />
      <Rect
        width="2.828"
        height="11.314"
        x="16.586"
        y="24.343"
        fill="#afb42b"
        transform="rotate(-45.001 18 30)"
      />
      <Path
        fill="#558b2f"
        d="M39.632,12.632c1.59-1.738,3.068-3.328,3.068-3.328c0.391-0.391,0.391-1.024,0-1.414l-2.586-2.586 c-0.391-0.391-1.024-0.391-1.414,0c0,0-1.588,1.479-3.325,3.071L39.632,12.632z"
      ></Path>
      <Path
        fill="#558b2f"
        d="M39.399,12.668l-4.067-4.067c-0.443-0.443-0.443-1.161,0-1.604l0.664-0.664 c0.443-0.443,1.161-0.443,1.604,0l4.067,4.067c0.443,0.443,0.443,1.161,0,1.604l-0.664,0.664 C40.56,13.111,39.842,13.111,39.399,12.668z"
      ></Path>
    </Svg>
  )
}
