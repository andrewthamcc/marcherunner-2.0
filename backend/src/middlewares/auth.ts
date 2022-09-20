import jwt, { JwtPayload } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

const jwksURL = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
const client = jwksClient({
  jwksUri: jwksURL,
})

async function getKey(header: jwt.JwtHeader, callback: any) {
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
      reject(new Error('No token provided'))
    }

    const bearerToken = token.split(' ')

    jwt.verify(
      bearerToken[1],
      getKey,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        algorithms: ['RS256'],
      },
      (err, decoded) => {
        if (err || decoded === undefined) {
          reject(err || 'No JWT was provided.')
        } else {
          resolve(decoded)
        }
      }
    )
  })
}

export default isTokenValid
