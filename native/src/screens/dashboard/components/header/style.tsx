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

export const IconContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const IconSpacing = styled(View)`
  margin-left: ${spacing.xlarge};
`

export const ModalView = styled(View)`
  background-color: ${colors.white};
  border-radius: 18px;
  border: 1px solid ${colors['light-grey']};
  margin: 50% ${spacing.xxlarge};
  padding: ${spacing.large};
`

export const ModalControls = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${spacing.xxlarge};
  background-color: ${colors.white};
`
