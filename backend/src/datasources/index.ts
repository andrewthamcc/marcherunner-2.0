import { PrismaClient } from '@prisma/client'
import { DataSource as Source } from 'apollo-datasource'
import { GroceryCategoryAPI } from './groceryCategoryAPI'
import { ItemAPI } from './itemAPI'

export interface DataSources {
  itemAPI: ItemAPI
  groceryCategoryAPI: GroceryCategoryAPI
}

export const dataSourcesInit = (prisma: PrismaClient) => {
  return {
    itemAPI: new ItemAPI(prisma),
    groceryCategoryAPI: new GroceryCategoryAPI(prisma),
  }
}
