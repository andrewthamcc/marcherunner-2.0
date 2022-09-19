import express, { Request } from 'express'
import { PrismaClient } from '@prisma/client'

export const itemRouter = express.Router()
const prisma = new PrismaClient()


export interface TypedRequestBody<T> extends Request {
  body: T
  user: any
}


itemRouter.post('/deleteAll', async (req, res) => {
  // const items = await prisma.item.findMany({ where: { id } })
  // if (!items.length) res.send(400)

  // await prisma.item.deleteMany({ where: { id } })
})

itemRouter.post('/deletePurchased', async (req, res) => {
  // const items = await prisma.item.findMany({ where: { id } })
  // if (!items.length) res.send(400)

  // await prisma.item.deleteMany({ where: { id, purchased: true } })
})

