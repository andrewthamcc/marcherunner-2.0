import React from 'react'
import { View } from 'react-native'

interface Props {
  categories: any[]
  items: any[]
  userId: string
}

export const ShopingList: React.FC<Props> = ({ categories, items, userId}) => {
  return (
    <View>shopping-list</View>
  )
}
