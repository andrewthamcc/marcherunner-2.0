import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { User } from '../../middlewares'
import { hasPermission, Permission } from '../../auth'

export class UserAPI extends DataSource {
  private store: PrismaClient
  private context: { user: User }
  private userPermissions: Permission[]

  constructor(store: PrismaClient, context: { user: User }) {
    super()
    this.store = store
    this.context = context
    this.userPermissions = this.context.user.permissions
  }

  /**
   *
   * @returns Promise<boolean>
   */
  async hasPermisson(permission: Permission) {
    if (hasPermission(this.userPermissions, permission)) {
      return true
    }

    throw new Error('User does not have the correct permissions.')
  }
}
