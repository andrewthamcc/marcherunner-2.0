import { View } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'
import { spacing } from '../../../../theme'

export const CategoryItemContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${spacing.xxsmall} 0;
`

export const CategoryItemCheckbox = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CategoryItemText = styled(Text)<{ purchased: boolean }>`
  margin-left: ${spacing.xsmall};
  font-style: ${({ purchased }) => (purchased ? 'italic' : '')};
  text-decoration: ${({ purchased }) => (purchased ? 'line-through' : '')};
`
