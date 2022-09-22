import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { Permission } from '../auth'

export interface Auth0TokenResponse extends JwtPayload {
  sub: string
}

export interface User {
  id: string
  permissions: Permission[]
}

export interface AuthRequest extends Request {
  user?: User
}
