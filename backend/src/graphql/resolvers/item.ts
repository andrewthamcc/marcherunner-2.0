import { Context } from '../../server'

type ItemArgs = {
  item: {
    name: string
    categoryId: string
    userId: string
  }
}

export default {
  Query: {
    items: async (
      _parent: void,
      _args: void,
      { user, dataSources }: Context
    ) => {
      return await dataSources.itemAPI.getItems(user.id)
    },
    item: async (
      _parent: void,
      { id }: { id: string },
      { dataSources }: Context
    ) => {
      return await dataSources.itemAPI.getItem(id)
    },
  },
  Mutation: {
    createItem: async (
      _parent: void,
      { item }: ItemArgs,
      { dataSources }: Context
    ) => {
      const { name, categoryId, userId } = item

      return await dataSources.itemAPI.createItem({
        name,
        categoryId,
        userId,
      })
    },
    updateItem: async (
      _parent: void,
      { id }: { id: string },
      { dataSources }: Context
    ) => {
      return await dataSources.itemAPI.updateItem(id)
    },
    deleteItem: async (
      _parent: void,
      { id }: { id: string },
      { dataSources }: Context
    ) => {
      return await dataSources.itemAPI.deleteItem(id)
    },
  },
}
