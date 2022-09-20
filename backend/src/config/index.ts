import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve('./.env') })

interface Config {
  jwksUrl: string
  domain: string
  fullDomain: string
  clientId: string
  audience: string
  issuer: string
}

export default {
  jwksUrl: process.env.AUTH0_JWKSURL,
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
} as Config
