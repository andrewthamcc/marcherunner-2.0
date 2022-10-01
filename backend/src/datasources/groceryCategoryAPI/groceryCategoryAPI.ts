import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'

export class GroceryCategoryAPI extends DataSource {
  private store: PrismaClient

  constructor(store: PrismaClient) {
    super()
    this.store = store
  }

  /**
   *
   * @returns Promise<categories[]>
   */
  async getCategories() {
    return this.store.groceryCategory.findMany()
  }
}
