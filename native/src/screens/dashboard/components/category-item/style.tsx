import { View } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'

export const CategoryItemContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`

export const CategoryItemCheckbox = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CategoryItemText = styled(Text)`
  margin-left: 8px;
`
