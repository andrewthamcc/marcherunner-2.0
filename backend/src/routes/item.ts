import express from 'express'
import { dataSourcesWithContext as dataSources } from '../server'
import { AuthRequest } from '../middlewares/types'

export const itemRouter = express.Router()

itemRouter.post('/deleteAll', async ({ user }: AuthRequest, res) => {
  if (!dataSources) return res.status(400)
  if (!user) return res.status(401).send('Unauthorized')

  await dataSources.itemAPI.deleteItems(user.id)
  return res.status(200).send({ body: { deleted: 'All Items' } })
})

itemRouter.post('/deletePurchased', async ({ user }: AuthRequest, res) => {
  if (!dataSources) return res.status(400)
  if (!user) return res.status(401).send('Unauthorized')

  await dataSources.itemAPI.deletePurchasedItems(user.id)
  return res.status(200).send({ body: { deleted: 'Purchased Items' } })
})
