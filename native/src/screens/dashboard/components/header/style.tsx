import { View, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../../components'
import { colors, spacing } from '../../../../theme'

export const Header = styled(View)`
  background-color: ${colors.green};
  margin-top: ${StatusBar.currentHeight}px;
  padding: ${spacing.medium} ${spacing.xxlarge};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitleContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const HeaderTitle = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  font-style: italic;
  margin-right: ${spacing.medium};
`

export const HeaderIcon = styled(View)`
  height: 40px;
  width: 40px;
`

export const DeleteContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const CloseIcon = styled(View)`
  margin-left: ${spacing.xlarge};
`
