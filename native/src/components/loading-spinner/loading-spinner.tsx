import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors, ColorValues } from '../../theme'

interface Props {
  color?: ColorValues
}

export const LoadingSpinner: React.FC<Props> = ({ color = 'green' }) => {
  return <ActivityIndicator color={colors[color]} size="small" />
}
