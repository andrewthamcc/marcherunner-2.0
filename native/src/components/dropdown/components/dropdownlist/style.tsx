import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors, spacing } from '../../../../theme'

export const DropdownView = styled(View)`
  background-color: ${colors.white};
  border-radius: 18px;
  border: 1px solid ${colors['light-grey']};
  padding: ${spacing.large};
  height: 80%;
`
