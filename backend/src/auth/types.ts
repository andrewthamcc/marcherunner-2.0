export const PERMISSIONS = [
  'create:item',
  'delete:item',
  'delete:items',
  'delete:allitems',
  'delete:purchased',
  'read:items',
  'update:item',
] as const
export type Permission = typeof PERMISSIONS[number]
