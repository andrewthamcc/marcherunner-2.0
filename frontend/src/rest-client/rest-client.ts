import { useReactiveVar } from '@apollo/client'
import { bearerToken } from '../apollo/store'

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

/**
 *
 * @param url - string
 * @param method - HTTP request method
 * @param body - BodyInit
 * @returns - Promise<Response>
 */
export const restClient = (
  url: string,
  method: HTTPMethod = 'GET',
  body?: BodyInit
) => {
  const token = useReactiveVar(bearerToken)

  return fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body,
  })
}
