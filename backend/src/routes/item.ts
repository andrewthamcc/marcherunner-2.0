import express, { Request } from 'express'
import { auth, requiredScopes, AuthResult } from 'express-oauth2-jwt-bearer'
import { dataSources } from '../server'

export const itemRouter = express.Router()
itemRouter.use(
  auth({
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
  })
)

export interface AuthRequest<T> extends AuthResult {
  body: T
}

itemRouter.post(
  '/deleteAll',
  requiredScopes('delete:items'),
  async (req, res) => {
    // await dataSources.itemAPI.deleteItems(req.userId)
  }
)

itemRouter.post(
  '/deletePurchased',
  requiredScopes('delete:purchasedItems'),
  async (req, res) => {
    // await dataSources.itemAPI.deletePurchasedItems(req.user.id)
  }
)
