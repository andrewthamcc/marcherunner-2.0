import { Context } from '../context'

type ItemArgs = {
  name: string
  categoryId: string
  userId: string
}

export default {
  Query: {
    items: async (_parent: void, args: void, { prisma }: Context) => {
      return await prisma.item.findMany()
    },
    item: async (
      _parent: void,
      { id }: { id: string },
      { prisma }: Context
    ) => {
      return await prisma.item.findUnique({
        where: {
          id,
        },
      })
    },
  },
  Mutation: {
    createItem: async (_parent: void, args: ItemArgs, { prisma }: Context) => {
      const { name, categoryId, userId } = args
      
      const exisiting = await prisma.item.findMany({ where: { name, userId }})
      if (exisiting) throw new Error('This is a duplicate item.')

      return await prisma.item.create({
        data: {
          name,
          categoryId,
          userId,
        },
      })
    },
    updateItem: async (
      _parent: void,
      { id }: { id: string },
      { prisma }: Context
    ) => {
      const item = await prisma.item.findUnique({ where: { id } })
      if (!item) throw new Error('That item could not be found.')

      return await prisma.item.update({
        where: {
          id,
        },
        data: {
          purchased: !item.purchased,
        },
      })
    },
    deleteItem: async (
      _parent: void,
      { id }: { id: string },
      { prisma }: Context
    ) => {
      const item = await prisma.item.findUnique({ where: { id } })
      if (!item) throw new Error('That item could not be found.')

      return prisma.item.delete({
        where: {
          id,
        },
      })
    },
  },
}
