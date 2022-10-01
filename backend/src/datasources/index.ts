import { PrismaClient } from '@prisma/client'
import { User } from '../middlewares'
import { ItemAPI } from './itemAPI'
import { GroceryCategoryAPI } from './groceryCategoryAPI'
import { UserAPI } from './userAPI'

export interface DataSources {
  itemAPI: ItemAPI
  groceryCategoryAPI: GroceryCategoryAPI
  userAPI: UserAPI
}

export interface Context {
  dataSources: DataSources
  user: User
}

export const dataSourcesInit = (prisma: PrismaClient) => {
  return {
    itemAPI: new ItemAPI(prisma),
    groceryCategoryAPI: new GroceryCategoryAPI(prisma),
    userAPI: new UserAPI(prisma),
  }
}
