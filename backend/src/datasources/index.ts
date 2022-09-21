import { PrismaClient } from '@prisma/client'
import { User } from '../middlewares'
import { GroceryCategoryAPI } from './groceryCategoryAPI'
import { ItemAPI } from './itemAPI'

export interface DataSources {
  itemAPI: ItemAPI
  groceryCategoryAPI: GroceryCategoryAPI
}

export const dataSourcesInit =
  (prisma: PrismaClient) => (context: { user: User }) => {
    return {
      itemAPI: new ItemAPI(prisma, context),
      groceryCategoryAPI: new GroceryCategoryAPI(prisma, context),
    }
  }
