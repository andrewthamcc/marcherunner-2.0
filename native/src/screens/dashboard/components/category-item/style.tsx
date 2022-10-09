import { Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'
import { colors, spacing } from '../../../../theme'

export const CategoryItemContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${spacing.medium} ${spacing.xxlarge};
  background-color: ${colors.white};
`

export const CategoryItemCheckbox = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CategoryItemText = styled(Text)<{ purchased: boolean }>`
  margin-left: ${spacing.xsmall};
  font-style: ${({ purchased }) => (purchased ? 'italic' : '')};
  text-decoration: ${({ purchased }) => (purchased ? 'line-through' : '')};
  color: ${({ purchased }) =>
    purchased ? colors['light-grey'] : colors.black};
`

export const SwipeContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.medium} ${spacing.xxlarge};
  background-color: #f05d5d;
`

export const DeleteIcon = styled(View)`
  margin-right: ${spacing.medium};
`

export const FullWidthPressable = styled(Pressable)`
  flex: 1;
`
