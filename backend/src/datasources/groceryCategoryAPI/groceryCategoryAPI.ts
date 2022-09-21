import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { User } from '../../middlewares'

export class GroceryCategoryAPI extends DataSource {
  private store: PrismaClient
  private context: { user: User }

  constructor(store: PrismaClient, context: { user: User }) {
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
