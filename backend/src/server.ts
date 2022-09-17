import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import app from './app'
import { initializeDB } from './db'

const sequelize = initializeDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

app.use((req, res) => {
  res.status(200)
  res.send('Hello!')
  res.end()
})

export { server, sequelize, app }
