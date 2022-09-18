import { mergeTypeDefs } from '@graphql-tools/merge'
import groceryCategorySchema from './grocery-category'
import itemSchema from './item'

const typeDefs = mergeTypeDefs([groceryCategorySchema, itemSchema])

export default typeDefs
