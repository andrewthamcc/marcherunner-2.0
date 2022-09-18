import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import { context } from './graphql/context'
import app from './app'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.applyMiddleware({ app })

app.use((_, res) => {
  res.status(200)
  res.send('Hello!')
  res.end()
})

export { server, app }
