import express from 'express'
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import { dataSources } from '../server'
import { AuthRequest } from '../middlewares/types'

export const itemRouter = express.Router()
itemRouter.use(
  auth({
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
  })
)

itemRouter.post(
  '/deleteAll',
  requiredScopes('delete:items'),
  async (req: AuthRequest, res) => {
    if (!req.user) return res.status(401).send('Unauthorized')

    await dataSources.itemAPI.deleteItems(req.user.id)
    return res.status(200).send({ body: { deleted: 'All Items' } })
  }
)

itemRouter.post(
  '/deletePurchased',
  requiredScopes('delete:purchasedItems'),
  async (req: AuthRequest, res) => {
    if (!req.user) return res.status(401).send('Unauthorized')

    await dataSources.itemAPI.deletePurchasedItems(req.user.id)
    return res.status(200).send({ body: { deleted: 'Purchased Items' } })
  }
)
