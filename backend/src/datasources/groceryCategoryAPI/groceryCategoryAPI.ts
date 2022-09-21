import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'

export class GroceryCategoryAPI extends DataSource {
  private store: PrismaClient
  private context: any

  constructor(store: any) {
    super()
    this.store = store
  }

  initialize(config: any) {
    this.context = config.context
  }

  /**
   *
   * @returns Promise<categories[]>
   */
  async getCategories() {
    return this.store.groceryCategory.findMany()
  }
}
