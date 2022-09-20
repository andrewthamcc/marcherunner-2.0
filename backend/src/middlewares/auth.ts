import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import config from '../config'

const jwksURL = `${config.jwksUrl}/.well-known/jwks.json`
const client = jwksClient({
  jwksUri: jwksURL,
})

async function getKey(header: JwtHeader, callback: any) {
  try {
    const key = await client.getSigningKey(header.kid)
    callback(null, key.getPublicKey())
  } catch (error) {
    console.error(error)
    return
  }
}

function isTokenValid(token: string): Promise<string | JwtPayload> {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('No JWT provided'))
    }

    const bearerToken = token.split(' ')

    jwt.verify(
      bearerToken[1],
      getKey,
      {
        audience: config.audience,
        issuer: config.issuer,
        algorithms: ['RS256'],
      },
      (error, decoded) => {
        if (error || decoded === undefined) {
          reject(error || 'No JWT provided')
        } else {
          resolve(decoded)
        }
      }
    )
  })
}

export default isTokenValid
