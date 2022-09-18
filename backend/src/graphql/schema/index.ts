import groceryCategorySchema from './grocery-category'
import itemSchema from './item'

const typeDefs = {
  ...groceryCategorySchema,
  ...itemSchema,
}

export default typeDefs
