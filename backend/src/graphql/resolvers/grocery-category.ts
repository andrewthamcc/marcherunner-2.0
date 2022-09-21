import { Context } from '../../server'

export default {
  Query: {
    groceryCategory: async (
      _parent: void,
      args: void,
      { dataSources }: Context
    ) => {
      return await dataSources.groceryCategoryAPI.getCategories()
    },
  },
}
