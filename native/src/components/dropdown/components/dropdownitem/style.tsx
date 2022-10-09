import { View } from 'react-native'
import styled from 'styled-components/native'
import { spacing } from '../../../../theme'

export const Item = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${spacing.xsmall} ${spacing.small};
`

export const ItemIcon = styled(View)`
  margin-right: ${spacing.medium};
`
