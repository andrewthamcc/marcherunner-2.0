import { Permission } from '../../auth'
import { prismaMock } from '../../tests/singleton'
import { UserAPI, PERMISSION_ERROR } from './userAPI'

const mockUserAPI = new UserAPI(prismaMock)

describe('User API', () => {
  const permissions: Permission[] = ['read:items', 'delete:item', 'update:item']

  it('returns true if the user has the permission', () => {
    const res = mockUserAPI.hasPermisson(permissions, 'read:items')
    expect(res).toEqual(true)
  })

  it('returns an error if the user does not have the correct permission', () => {
    expect(() => mockUserAPI.hasPermisson(permissions, 'delete:purchased')).toThrow(PERMISSION_ERROR)
  })
})
