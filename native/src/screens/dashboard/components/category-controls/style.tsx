import { View } from 'react-native'
import styled from 'styled-components/native'
import { TextInput } from '../../../../components'
import { spacing } from '../../../../theme'

export const CategoryControlsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.xxlarge};
`

export const ItemInput = styled(TextInput)`
  flex: 1;
  margin: 0 ${spacing.xsmall};
`

export const CategoryClose = styled(View)`
  margin-left: ${spacing.medium};
`
