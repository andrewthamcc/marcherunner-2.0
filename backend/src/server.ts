import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { DataSources as ApolloDataSources } from 'apollo-server-core/dist/graphqlOptions'
import { schema } from './graphql'
import { prismaClient } from './prismaClient'
import { isTokenValid } from './auth'
import { dataSourcesInit, DataSources, DataSourcesContext } from './datasources'
import { restAuth, Auth0TokenResponse } from './middlewares'
import app from './app'

export const dataSources = dataSourcesInit(prismaClient.prisma)
export let dataSourcesWithContext: DataSources

const addDataSourcesContext = (context: DataSourcesContext) =>
  dataSources(context)

const context = async ({ req }: ExpressContext) => {
  const token = req.headers.authorization
  if (!!token) {
    try {
      const res = (await isTokenValid(token)) as unknown as Auth0TokenResponse
      const user = { id: res.sub, permissions: res.permissions }

      dataSourcesWithContext = addDataSourcesContext({ user })

      return { user }
    } catch (error) {
      const user = { id: '', permissions: [] }
      dataSourcesWithContext = addDataSourcesContext({
        user,
      })
      return error
    }
  }

  return {}
}

export async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    dataSources: () =>
      dataSourcesWithContext as unknown as ApolloDataSources<DataSources>,
    context,
    csrfPrevention: true,
    introspection: true,
  })

  await server.start()
  server.applyMiddleware({ app })

  app.use(restAuth, (_, res) => {
    res.status(200)
    res.send('Hello World 🌎!')
    res.end()
  })

  const port = process.env.port || 4000
  app.listen({ port }, () =>
    console.log(
      `Server running on http://localhost:${port}${server.graphqlPath} 🚀`
    )
  )
  return { server, app }
}
