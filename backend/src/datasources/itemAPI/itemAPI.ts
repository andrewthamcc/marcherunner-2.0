import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { Permission } from '../../auth'
import { User } from '../../middlewares'
import { dataSources } from '../../server'

interface Item {
  name: string
  categoryId: string
  userId: string
}

export class ItemAPI extends DataSource {
  private store: PrismaClient

  constructor(store: PrismaClient) {
    super()
    this.store = store
  }

  /**
   *
   * @param userId - UUID
   * @returns Promise<items[]>
   */
  async getItems({ id, permissions }: User) {
    await dataSources?.userAPI.hasPermisson(permissions, 'read:items')

    return this.store.item.findMany({ where: { userId: id } })
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
  async createItem(item: Item, userPermissions: Permission[]) {
    await dataSources?.userAPI.hasPermisson(userPermissions, 'create:item')

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
  async updateItem(itemId: string, userPermissions: Permission[]) {
    await dataSources?.userAPI.hasPermisson(userPermissions, 'update:item')

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
  async deleteItem(itemId: string, userPermissions: Permission[]) {
    await dataSources?.userAPI.hasPermisson(userPermissions, 'delete:item')

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
  async deleteItems({ id, permissions }: User) {
    await dataSources?.userAPI.hasPermisson(permissions, 'delete:items')

    return this.store.item.deleteMany({ where: { userId: id } })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deletePurchasedItems({ id, permissions }: User) {
    await dataSources?.userAPI.hasPermisson(permissions, 'delete:purchased')

    return this.store.item.deleteMany({
      where: { userId: id, purchased: true },
    })
  }
}
