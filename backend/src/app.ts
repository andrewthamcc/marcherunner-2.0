import path from 'path'
import express from 'express'
import cors from 'cors'
import { itemRouter } from './routes'
import { restAuth } from './middlewares'

const env = process.env.NODE_ENV

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:4000',
      'http://marcherunner.com',
    ],
  })
)

app.use('/item', restAuth, itemRouter)
app.get('/', (_, res) => {
  res.status(200).send('Hello World 🌎')
})

if (env === 'production') {
  const pathName = path.join(__dirname, '../../frontend/build')

  app.use(express.static(pathName))

  app.get('*', (_, res) => {
    res.sendFile(pathName)
  })
}

export default app
