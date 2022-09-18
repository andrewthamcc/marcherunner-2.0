import { Context } from '../context'

export default {
  Query: {
     groceryCategory: async (_parent: void, args: void, { prisma }: Context) => {
      return await prisma.groceryCategory.findMany()
    },
  },
}
