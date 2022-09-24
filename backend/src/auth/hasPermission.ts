import { Permission } from './types'

/**
 *
 * @param userPermissions - list of user permissions
 * @param permission - permission to validate
 * @returns boolean
 */
export const hasPermission = (
  userPermissions: Permission[],
  permission: Permission
) => {
  return userPermissions.includes(permission)
}
