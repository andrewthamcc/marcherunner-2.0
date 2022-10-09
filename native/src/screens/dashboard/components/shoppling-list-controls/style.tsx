import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors, spacing } from '../../../../theme'

export const ShoppingListContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${spacing.medium} ${spacing.xxlarge};
`

export const DeleteIcons = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: ${spacing.xlarge};
`

export const IconSpacing = styled(View)`
  margin-left: ${spacing.xlarge};
`

export const DeleteModalView = styled(View)`
  background-color: ${colors.white};
  border-radius: 18px;
  border: 1px solid ${colors['light-grey']};
  width: 80%;
  padding: ${spacing.xxlarge} ${spacing.large};
`

export const DeleteModalControls = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${spacing.xxlarge};
  background-color: ${colors.white};
`
