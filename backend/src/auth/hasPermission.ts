import { Permission } from './types'

export const hasPermission = (
  userPermissions: Permission[],
  permission: Permission
) => {
  return userPermissions.includes(permission)
}
