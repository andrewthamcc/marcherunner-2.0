import { makeVar } from '@apollo/client'

export const bearerToken = makeVar<string | null>(null)
