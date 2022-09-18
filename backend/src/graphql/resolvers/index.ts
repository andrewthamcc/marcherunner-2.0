import groceryCategoryResolver from './grocery-category'
import itemResolver from './item'

const resolvers = {
  ...groceryCategoryResolver,
  ...itemResolver
}

export default resolvers
