import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './home'
import { Dashboard } from './dashboard'

const { Navigator, Screen } = createNativeStackNavigator()

export const Screens: React.FC = () => {
  return (
    <Navigator  initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  )
}
