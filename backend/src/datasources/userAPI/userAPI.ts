import { PrismaClient } from '@prisma/client'
import { DataSource } from 'apollo-datasource'
import { Permission } from '../../auth'

export const PERMISSION_ERROR = 'User does not have the correct permissions.'

export class UserAPI extends DataSource {
  private store: PrismaClient

  constructor(store: PrismaClient) {
    super()
    this.store = store
  }

  /**
   *
   * @returns boolean | error
   */
  hasPermisson(userPermissions: Permission[], permission: Permission) {
    if (userPermissions.includes(permission)) {
      return true
    }

    throw new Error(PERMISSION_ERROR)
  }
}
