import { hasPermission } from './hasPermission'
import { PERMISSIONS } from './types'

describe('permission ceck', () => {
  it('will return true if user has permission', () => {
    PERMISSIONS.forEach((p) => {
      expect(
        hasPermission(
          PERMISSIONS.map((p) => p),
          p
        )
      ).toEqual(true)
    })
  })

  it('will return false if user does not have permission', () => {
    PERMISSIONS.forEach((p) => {
      expect(hasPermission([], p)).toEqual(false)
    })
  })
})
