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
  const env = process.env
  const baseUrl =
    env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEV_REST_URL
      : process.env.REACT_APP_PROD_REST_URL

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
