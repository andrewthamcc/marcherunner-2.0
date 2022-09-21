import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { schema } from './graphql'
import { prismaClient } from './prismaClient'
import { isTokenValid, restAuth, Auth0TokenResponse, User } from './middlewares'
import { dataSourcesInit, DataSources } from './datasources'
import app from './app'

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

export async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    dataSources: () => dataSources,
    context,
    csrfPrevention: true,
  })

  await server.start()
  server.applyMiddleware({ app })

  app.use(restAuth, (_, res) => {
    res.status(200)
    res.send('Hello World 🌎!')
    res.end()
  })

  const port = process.env.NODEENV || 4000
  app.listen({ port }, () =>
    console.log(
      `Server running on http://localhost:${port}${server.graphqlPath} 🚀`
    )
  )
  return { server, app }
}
