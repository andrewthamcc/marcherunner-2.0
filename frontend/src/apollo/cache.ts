import { InMemoryCache } from '@apollo/client'

export default function createCache(): InMemoryCache {
  return new InMemoryCache()
}
