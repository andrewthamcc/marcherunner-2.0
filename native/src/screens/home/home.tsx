import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../theme'
import { Button, Text } from '../../components'
import { useAuth } from '../../auth/use-auth'
import {
  HomeView,
  HeroContainer,
  HeroBackgroundImage,
  HeroTitle,
  HeroSubTitle,
  HomeInstructions,
  IconContainer,
  LoginContainer,
} from './style'
import { Cart, List, Profile } from './assets'

export const Home: React.FC = () => {
  const { login } = useAuth()

  return (
    <HomeView>
      <StatusBar backgroundColor={colors.green} />
      <HeroBackgroundImage source={require('./assets/grocery.jpg')}>
        <HeroContainer>
          <HeroTitle>MarchéRunner</HeroTitle>
          <HeroSubTitle>Helping with your grocery runs</HeroSubTitle>

          <HomeInstructions>
            <View>
              <IconContainer>
                <Profile />
              </IconContainer>
              <Text align="center" color="white" variant="body-copy-xlarge">
                Login with a social media partner
              </Text>
            </View>

            <View>
              <IconContainer>
                <List />
              </IconContainer>
              <Text align="center" color="white" variant="body-copy-xlarge">
                Make your shopping list
              </Text>
            </View>

            <View>
              <IconContainer>
                <Cart />
              </IconContainer>
              <Text align="center" color="white" variant="body-copy-xlarge">
                Go shopping with MarchéRunner!
              </Text>
            </View>
          </HomeInstructions>

          <LoginContainer>
            <Button color="orange" label="Login" onPress={login} />
          </LoginContainer>
        </HeroContainer>
      </HeroBackgroundImage>
    </HomeView>
  )
}
