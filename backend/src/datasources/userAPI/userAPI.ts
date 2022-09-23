import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { hasPermission, Permission } from '../../auth'
import { DataSourcesContext } from '..'

export class UserAPI extends DataSource {
  private store: PrismaClient
  private context: DataSourcesContext
  private userPermissions: Permission[]

  constructor(store: PrismaClient, context: DataSourcesContext) {
    super()
    this.store = store
    this.context = context
    this.userPermissions = this.context.user?.permissions || []
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
