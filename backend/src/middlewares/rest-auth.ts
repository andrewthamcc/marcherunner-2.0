import { Response, NextFunction } from 'express'
import { Auth0TokenResponse, AuthRequest, isTokenValid } from '.'

export const restAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization
  if (!!token) {
    try {
      const res = (await isTokenValid(token)) as unknown as Auth0TokenResponse
      const user = { id: res.sub, permissions: res.permissions }

      req.user = user
      next()
    } catch (error) {
      console.error(error)
      res.status(401).send({ error: 'Please authenticate' })
    }
  }
}
