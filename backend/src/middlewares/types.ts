import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface Auth0TokenResponse extends JwtPayload {
  sub: string
}

export interface User {
  id: string
  permissions: string[]
}

export interface AuthRequest extends Request {
  user?: User
}
