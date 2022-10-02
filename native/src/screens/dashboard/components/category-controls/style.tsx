import { View } from 'react-native'
import styled from 'styled-components/native'
import { Text, TextInput } from '../../../../components'

export const CategoryControlsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CategoryTitle = styled(Text)`
  flex: 1;
  font-weight: 600;
  font-size: 20px;
`

export const ItemInput = styled(TextInput)`
  flex: 1;
  margin: 0 8px;
`

export const CategoryClose = styled(View)`
  margin-left: 8px;
`
