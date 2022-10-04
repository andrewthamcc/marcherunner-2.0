import { KeyboardAvoidingView, View } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'
import { colors, spacing, typography } from '../../../../theme'

export const CategoryListContainer = styled(KeyboardAvoidingView)`
  margin: 24px 0;
`

export const HR = styled(View)`
  border: 0.75px solid ${colors['light-grey']};
  margin: ${spacing.xsmall} 0;
`

export const NothingHere = styled(Text)`
  flex: 1;
  text-align: center;
  font-style: italic;
  font-size: ${typography['body-copy-xsmall'].fontSize};
`
