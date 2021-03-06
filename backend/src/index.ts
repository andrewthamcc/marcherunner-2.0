import { app, server } from './server'

const port = process.env.port || 4000

app.listen({ port }, () =>
  console.log(
    `Server running on http://localhost:${port}${server.graphqlPath} 🚀`
  )
)
