import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { JwtPayload } from 'jsonwebtoken'
import isTokenValid from './middlewares/auth'
import { schema } from './graphql'
import { prismaClient } from './prismaClient'
import { dataSourcesInit, DataSources } from './datasources'
import app from './app'

interface Auth0TokenResponse extends JwtPayload {
  sub: string
  permissions: string[]
}

interface User {
  id: string
  permissions?: string[]
}

export interface Context {
  dataSources: DataSources
  user: User
}

export const dataSources = dataSourcesInit(prismaClient.prisma)

const context = async ({ req }: ExpressContext) => {
  const token = req.headers.authorization
  if (!!token) {
    try {
      const res = (await isTokenValid(token)) as unknown as Auth0TokenResponse
      const user = { id: res.sub, permissions: res.permissions }

      return { user }
    } catch (error) {
      console.error(error)
      return error
    }
  }

  return {}
}

const server = new ApolloServer({
  schema,
  dataSources: () => dataSources,
  context,
  playground: true,
})

server.applyMiddleware({ app })

app.use((_, res) => {
  res.status(200)
  res.send('Hello!')
  res.end()
})

export { server, app }
