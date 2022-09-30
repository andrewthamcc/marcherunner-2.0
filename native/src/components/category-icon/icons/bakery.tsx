import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

export const Bakery: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48">
      <Path
        fill="#FFB300"
        d="M40.061,7.939c4.852,4.853,0.109,14.49-8.761,23.361c-8.87,8.867-18.508,13.611-23.36,8.76c-4.853-4.853-0.11-14.49,8.76-23.361C25.569,7.831,35.208,3.087,40.061,7.939z"
      ></Path>
      <Path
        fill="#FFA000"
        d="M19.906 28.937c.305 4.182-.345 6.569-1.195 7.933-1.815 1.631-2.672 1.815-2.672 1.815S15.752 27.319 16.063 23c.021-.292 1.396-2.146 1.396-2.146S19.591 24.617 19.906 28.937zM27.906 22.249c.305 4.182-.346 6.569-1.195 7.933-1.815 1.631-2.672 1.815-2.672 1.815s-.287-11.365.023-15.685c.021-.292 1.396-2.146 1.396-2.146S27.592 17.93 27.906 22.249zM35.928 15.957c.305 4.182-.346 6.569-1.195 7.933-1.815 1.631-2.672 1.815-2.672 1.815s-.287-11.365.023-15.685c.021-.292 1.396-2.146 1.396-2.146S35.612 11.638 35.928 15.957z"
      ></Path>
      <G>
        <Path
          fill="#FFE082"
          d="M18 30.843c0 4.331-1.961 7.842-1.961 7.842s-1.96-3.511-1.96-7.842c0-4.331 1.96-7.843 1.96-7.843S18 26.512 18 30.843zM26.014 24.157c0 4.332-1.96 7.843-1.96 7.843s-1.96-3.511-1.961-7.843c0-4.33 1.961-7.842 1.961-7.842S26.014 19.827 26.014 24.157zM34 17.842c0 4.332-1.961 7.843-1.961 7.843s-1.96-3.511-1.961-7.843c0-4.33 1.961-7.842 1.961-7.842S34 13.512 34 17.842z"
        ></Path>
      </G>
    </Svg>
  )
}
