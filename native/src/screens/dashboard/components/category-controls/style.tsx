import { View } from 'react-native'
import styled from 'styled-components/native'
import { Text, TextInput } from '../../../../components'
import { typography, spacing } from '../../../../theme'

export const CategoryControlsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CategoryTitle = styled(Text)`
  flex: 1;
  font-size: ${typography['body-copy-xlarge'].fontSize};
  font-weight: 600;
`

export const CloseDelete = styled(Text)`
  text-align: right;
  font-size: ${typography['body-copy'].fontSize};
  font-style: italic;
  font-weight: 500;
  margin-right: ${spacing.xsmall};
`

export const ItemInput = styled(TextInput)`
  flex: 1;
  margin: 0 ${spacing.xsmall};
`

export const CategoryClose = styled(View)`
  margin-left: ${spacing.xsmall};
`
