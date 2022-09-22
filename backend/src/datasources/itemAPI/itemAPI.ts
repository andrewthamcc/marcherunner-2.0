import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { User } from '../../middlewares'
import { dataSourcesWithContext as dataSources } from '../../server'

interface Item {
  name: string
  categoryId: string
  userId: string
}

export class ItemAPI extends DataSource {
  private store: PrismaClient
  private context: { user: User }

  constructor(store: PrismaClient, context: { user: User }) {
    super()
    this.store = store
    this.context = context
  }

  /**
   *
   * @param userId - UUID
   * @returns Promise<items[]>
   */
  async getItems(userId: string) {
    await dataSources?.userAPI.hasPermisson('read:items')

    return this.store.item.findMany({ where: { userId } })
  }

  /**
   *
   * @param userId - string
   * @returns Promise<item>
   */
  async getItem(itemId: string) {
    // await dataSources?.userAPI.hasPermisson('read:item')

    return this.store.item.findMany({ where: { id: itemId } })
  }

  /**
   *
   * @param item - {  name: string, categoryId: UUID, userId: UUID }
   * @returns Promise<item>
   */
  async createItem(item: Item) {
    await dataSources?.userAPI.hasPermisson('create:item')

    const { name, categoryId, userId } = item

    return this.store.item.create({
      data: {
        name,
        categoryId,
        userId,
      },
    })
  }

  /**
   *
   * @param itemId - string
   * @returns Promise<item>
   */
  async updateItem(itemId: string) {
    await dataSources?.userAPI.hasPermisson('update:item')

    const item = await this.store.item.findUnique({ where: { id: itemId } })
    if (!item) throw new Error('That item could not be found.')

    return this.store.item.update({
      where: {
        id: item.id,
      },
      data: {
        purchased: !item.purchased,
      },
    })
  }

  /**
   *
   * @param itemId - string
   * @returns Promise<item>
   */
  async deleteItem(itemId: string) {
    await dataSources?.userAPI.hasPermisson('delete:item')

    const item = this.store.item.findUnique({ where: { id: itemId } })
    if (!item) throw new Error('That item could not be found.')

    return this.store.item.delete({
      where: {
        id: itemId,
      },
    })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deleteItems(userId: string) {
    await dataSources?.userAPI.hasPermisson('delete:items')

    return this.store.item.deleteMany({ where: { userId } })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deletePurchasedItems(userId: string) {
    await dataSources?.userAPI.hasPermisson('delete:purchased')

    return this.store.item.deleteMany({ where: { userId, purchased: true } })
  }
}
