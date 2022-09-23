import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import config from '../config'

const jwksURL = `${config.jwksUrl}/.well-known/jwks.json`
const client = jwksClient({
  jwksUri: jwksURL,
})

type CallBack = <X, Y>(a: X, b: Y) => void

async function getKey(header: JwtHeader, callback: CallBack) {
  try {
    const key = await client.getSigningKey(header.kid)
    callback(null, key.getPublicKey())
  } catch (error) {
    return error
  }
}

export const isTokenValid = (token: string): Promise<string | JwtPayload> => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('No JWT provided'))
    }

    const bearerToken = token.split(' ')

    jwt.verify(
      bearerToken[1],
      getKey as unknown as CallBack,
      {
        audience: config.audience,
        issuer: config.issuer,
        algorithms: ['RS256'],
      },
      (error, decoded) => {
        if (error || decoded === undefined) {
          reject(error || 'No JWT Provided')
        } else {
          resolve(decoded)
        }
      }
    )
  })
}
