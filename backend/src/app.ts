import express from 'express'
import { itemRouter } from './routes'

const app = express()
app.use(express.json())

app.use('/items', itemRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

export default app
