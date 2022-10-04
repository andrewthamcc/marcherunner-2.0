import { View } from 'react-native'
import styled from 'styled-components/native'
import { spacing } from '../../theme'

export const LoadingErrorView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const DashboardView = styled(View)`
  flex: 1;
  padding: 0 ${spacing.large};
`
