import { ApolloClient } from '@apollo/client'
import createCache from './cache'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: createCache(),
})

export default client
