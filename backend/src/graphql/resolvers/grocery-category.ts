import { Context } from '../../datasources'

export default {
  Query: {
    groceryCategories: async (
      _parent: void,
      _args: void,
      { dataSources }: Context
    ) => {
      return await dataSources.groceryCategoryAPI.getCategories()
    },
  },
}
