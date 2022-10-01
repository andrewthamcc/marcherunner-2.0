import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text } from '../../components'
import { useAuth } from '../../auth/use-auth'

export const Home: React.FC = () => {
  const { login } = useAuth()

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>MarchéRunner - helping with your grocery runs.</Text>
          <Button label="Login" onPress={login} />
        </View>

        <Text>How it works...</Text>

        <Text>
          A super simple application for all your grocery shopping needs. Write
          your list, head off on your shopping trip, and start over again.
        </Text>

        <Text align="center" variant="body-copy-xlarge" fontWeight={600}>
          1. Login with a social media partner.
        </Text>

        <Text align="center" variant="body-copy-xlarge" fontWeight={600}>
          2. Make your shopping list.
        </Text>

        <Text align="center" variant="body-copy-xlarge" fontWeight={600}>
          3. Go shopping with MarchéRunner!
        </Text>
      </ScrollView>
    </View>
  )
}
