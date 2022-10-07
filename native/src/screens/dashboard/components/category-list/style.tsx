import { KeyboardAvoidingView, View } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'
import { colors, spacing } from '../../../../theme'

export const CategoryListContainer = styled(KeyboardAvoidingView)`
  margin: 24px 0;
`

export const Italic = styled(Text)`
  font-style: italic;
`

export const HR = styled(View)`
  border: 0.5px solid ${colors['light-grey']};
  margin: ${spacing.xxsmall} auto ${spacing.small};
  width: 90%;
`
