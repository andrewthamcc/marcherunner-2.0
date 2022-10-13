import { Context } from '../../datasources'

type ItemArgs = {
  item: {
    name: string
    categoryId: string
  }
}

export default {
  Query: {
    items: async (
      _parent: void,
      _args: void,
      { user, dataSources }: Context
    ) => {
      return await dataSources.itemAPI.getItems(user)
    },
  },
  Mutation: {
    createItem: async (
      _parent: void,
      { item }: ItemArgs,
      { user, dataSources }: Context
    ) => {
      const { name, categoryId } = item

      return await dataSources.itemAPI.createItem(
        {
          name,
          categoryId,
          userId: user.id,
        },
        user.permissions
      )
    },
    updateItem: async (
      _parent: void,
      { id }: { id: string },
      { user, dataSources }: Context
    ) => {
      return await dataSources.itemAPI.updateItem(id, user.permissions)
    },
    deleteItem: async (
      _parent: void,
      { id }: { id: string },
      { user, dataSources }: Context
    ) => {
      return await dataSources.itemAPI.deleteItem(id, user.permissions)
    },
    deleteItems: async (
      _parent: void,
      { deleteData }: { deleteData: string[] },
      { user, dataSources }: Context
    ) => {
      return await dataSources.itemAPI.deleteItems(deleteData, user.permissions)
    },
  },
}
