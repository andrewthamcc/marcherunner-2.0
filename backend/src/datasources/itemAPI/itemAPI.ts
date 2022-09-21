import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'

interface Item {
  name: string
  categoryId: string
  userId: string
}

export class ItemAPI extends DataSource {
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
   * @param userId - UUID
   * @returns Promise<items[]>
   */
  async getItems(userId: string) {
    return this.store.item.findMany({ where: { userId } })
  }

  /**
   *
   * @param userId - string
   * @returns Promise<item>
   */
  async getItem(itemId: string) {
    return this.store.item.findMany({ where: { id: itemId } })
  }

  /**
   *
   * @param item - {  name: string, categoryId: UUID, userId: UUID }
   * @returns Promise<item>
   */
  async createItem(item: Item) {
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
    return this.store.item.deleteMany({ where: { userId } })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deletePurchasedItems(userId: string) {
    return this.store.item.deleteMany({ where: { userId, purchased: true } })
  }
}
