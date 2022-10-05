import { View } from 'react-native'
import styled from 'styled-components/native'
import { TextInput } from '../../../../components'
import { spacing, colors } from '../../../../theme'

export const CategoryControlsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 0 ${spacing.xxlarge};
`

export const ItemInput = styled(TextInput)`
  flex: 1;
  margin: 0 ${spacing.xsmall};
`

export const FullWidth = styled(View)`
  flex: 1;
`

export const CategoryClose = styled(View)`
  margin-left: ${spacing.medium};
`

export const HR = styled(View)`
  border: 0.75px solid ${colors['light-grey']};
  margin: ${spacing.xsmall} 0;
`
