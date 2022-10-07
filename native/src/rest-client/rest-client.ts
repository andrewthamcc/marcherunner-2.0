import { REACT_APP_REST_URL } from '@env'
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
  const baseUrl = REACT_APP_REST_URL

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
