import { ImageBackground, StatusBar, View } from 'react-native'
import styled from 'styled-components/native'
import { colors, spacing } from '../../theme'
import { Text } from '../../components'

export const HomeView = styled(View)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`

export const HeroContainer = styled(View)`
  flex: 1;
  padding: 12% 8%;
  background-color: 'rgba(6, 16, 7, 0.5)';
`

export const HeroBackgroundImage = styled(ImageBackground)`
  flex: 1;
`

export const HeroTitle = styled(Text)`
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
`

export const HeroSubTitle = styled(Text)`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  font-style: italic;
`

export const IconContainer = styled(View)`
  background-color: ${colors.green};
  border-radius: 12px;
  height: 90px;
  width: 90px;
  padding: ${spacing.xsmall};
  margin: 0 auto ${spacing.medium};
`

export const HomeInstructions = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 48px 0;
`

export const LoginContainer = styled(View)`
  justify-content: center;
  align-items: center;
`
