import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { DataSourcesContext } from '..'

export class GroceryCategoryAPI extends DataSource {
  private store: PrismaClient
  private context: DataSourcesContext

  constructor(store: PrismaClient, context: DataSourcesContext) {
    super()
    this.store = store
    this.context = context
  }

  /**
   *
   * @returns Promise<categories[]>
   */
  async getCategories() {
    return this.store.groceryCategory.findMany()
  }
}
