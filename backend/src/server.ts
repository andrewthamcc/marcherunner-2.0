import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { schema } from './graphql'
import { prismaClient } from './prismaClient'
import { isTokenValid } from './auth'
import { dataSourcesInit } from './datasources'
import { Auth0TokenResponse } from './middlewares'
import app from './app'

export const dataSources = dataSourcesInit(prismaClient.prisma)

const context = async ({ req }: ExpressContext) => {
  const token = req.headers.authorization
  if (!!token) {
    try {
      const res = (await isTokenValid(token)) as unknown as Auth0TokenResponse
      const user = { id: res.sub, permissions: res.permissions }

      return { user }
    } catch (error) {
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
    introspection: true,
  })

  await server.start()
  server.applyMiddleware({ app })

  const port = process.env.port || 4000
  app.listen({ port }, () =>
    console.log(
      `Server running on http://localhost:${port}${server.graphqlPath} 🚀`
    )
  )
  return { server, app }
}
