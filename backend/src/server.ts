import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'
import { context } from './graphql/context'
import app from './app'

const server = new ApolloServer({
  schema,
  context,
})

server.applyMiddleware({ app })

app.use((_, res) => {
  res.status(200)
  res.send('Hello!')
  res.end()
})

export { server, app }
