import groceryCategoryResolver from './grocery-category'
import itemResolver from './item'

const resolvers = {
  Query: {
    ...groceryCategoryResolver.Query,
    ...itemResolver.Query,
  },
  Mutation: {
    ...itemResolver.Mutation,
  },
}

export default resolvers
