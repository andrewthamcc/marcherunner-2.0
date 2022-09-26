import { bearerToken } from '../apollo/store'

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

/**
 *
 * @param endpoint - string
 * @param method - HTTP request method
 * @param body - BodyInit
 * @returns - Promise<Response>
 */
export const restClient = async (
  url: string,
  method: HTTPMethod = 'GET',
  body?: BodyInit
) => {
  const token = bearerToken()
  const baseUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

  return fetch(baseUrl + url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body,
  })
}
