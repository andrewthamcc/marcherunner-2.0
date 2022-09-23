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

export type DataSourcesContext = { user: User }

export interface Context {
  dataSources: DataSources
  user: User
}

export const dataSourcesInit =
  (prisma: PrismaClient) => (context: DataSourcesContext) => {
    return {
      itemAPI: new ItemAPI(prisma, context),
      groceryCategoryAPI: new GroceryCategoryAPI(prisma, context),
      userAPI: new UserAPI(prisma, context),
    }
  }
