import express from 'express'
import cors from 'cors'
import { itemRouter } from './routes'
import { restAuth } from './middlewares'

const app = express()
app.use(express.json())

app.use('/item', restAuth, itemRouter)

export default app
