import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import {
  CATEGORY_ICONS,
  CategoryIcon,
  ICON_TYPES,
  Icon,
  SYMBOL_TYPES,
  Symbol,
} from '../../components'

export const Dashboard: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>App</Text>
      </ScrollView>
    </View>
  )
}
