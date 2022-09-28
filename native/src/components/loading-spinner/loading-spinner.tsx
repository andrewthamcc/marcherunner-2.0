import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../../theme'

export const LoadingSpinner = () => {
  return <ActivityIndicator color={colors.green} size="small" />
}
