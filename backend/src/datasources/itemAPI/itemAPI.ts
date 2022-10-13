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
    dataSources?.userAPI.hasPermisson(permissions, 'read:items')

    return this.store.item.findMany({ where: { userId: id } })
  }

  /**
   *
   * @param item - {  name: string, categoryId: UUID, userId: UUID }
   * @returns Promise<item>
   */
  async createItem(item: Item, userPermissions: Permission[]) {
    dataSources?.userAPI.hasPermisson(userPermissions, 'create:item')

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
    dataSources?.userAPI.hasPermisson(userPermissions, 'update:item')

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
    dataSources?.userAPI.hasPermisson(userPermissions, 'delete:item')

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
   * @param items - {items: UUID[]}
   * @returns Promise
   */
  async deleteItems(items: string[], userPermissions: Permission[]) {
    dataSources?.userAPI.hasPermisson(userPermissions, 'delete:items')

    return this.store.item.deleteMany({
      where: {
        id: {
          in: items,
        },
      },
    })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deleteAllItems({ id, permissions }: User) {
    dataSources?.userAPI.hasPermisson(permissions, 'delete:allitems')

    return this.store.item.deleteMany({ where: { userId: id } })
  }

  /**
   *
   * @param string
   * @returns Promise
   */
  async deletePurchasedItems({ id, permissions }: User) {
    dataSources?.userAPI.hasPermisson(permissions, 'delete:purchased')

    return this.store.item.deleteMany({
      where: { userId: id, purchased: true },
    })
  }
}
