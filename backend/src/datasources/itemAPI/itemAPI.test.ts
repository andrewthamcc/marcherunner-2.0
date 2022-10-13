import { prismaMock } from '../../tests/singleton'
import { Permission } from '../../auth'
import { ItemAPI } from './itemAPI'

jest.mock('../../server', () => {
  return {
    __esModule: true,
    dataSources: {
      itemAPI: jest.fn(),
      groceryCategoryAPI: jest.fn(),
      userAPI: { hasPermisson: jest.fn().mockResolvedValue(true) },
    },
  }
})

const mockItemAPI = new ItemAPI(prismaMock)
const mockUserId = '123-456-7890'

const mockUser = {
  id: mockUserId,
  permissions: [
    'create:item',
    'delete:item',
    'delete:items',
    'delete:allitems',
    'delete:purchased',
    'read:items',
    'update:item',
  ] as Permission[],
}

const itemsMock = [
  {
    id: '1',
    name: 'cheddar',
    category: 'dairy',
    categoryId: '000',
    purchased: false,
    userId: mockUserId,
  },
  {
    id: '2',
    name: 'steak',
    category: 'meat',
    categoryId: '999',
    purchased: true,
    userId: mockUserId,
  },
]

describe('Item API', () => {
  it('should get all items', async () => {
    prismaMock.item.findMany.mockResolvedValue(itemsMock)

    const res = await mockItemAPI.getItems(mockUser)
    expect(res).toHaveLength(itemsMock.length)
    expect(res).toStrictEqual(itemsMock)
  })

  it('should create an item', async () => {
    const newItem = {
      id: '3',
      name: 'coke',
      categoryId: '888',
      userId: mockUserId,
    }

    const returnedItem = {
      ...newItem,
      categoryId: '555',
      purchased: false,
    }

    prismaMock.item.create.mockResolvedValue(returnedItem)
    const res = await mockItemAPI.createItem(newItem, mockUser.permissions)
    expect(res).toStrictEqual(returnedItem)
  })

  it('should update an item', async () => {
    const updatedItem = {
      id: '1',
      name: 'cheddar',
      category: 'dairy',
      categoryId: '000',
      purchased: true,
      userId: mockUserId,
    }

    prismaMock.item.findUnique.mockResolvedValue(itemsMock[0])
    prismaMock.item.update.mockResolvedValue(updatedItem)
    const res = await mockItemAPI.updateItem('1', mockUser.permissions)
    expect(res.purchased).toEqual(true)
  })

  it('should delete an item', async () => {
    prismaMock.item.findUnique.mockResolvedValue(itemsMock[0])
    prismaMock.item.delete.mockResolvedValue(itemsMock[0])
    const res = await mockItemAPI.deleteItem('1', mockUser.permissions)
    expect(res).toStrictEqual(itemsMock[0])
  })

  it('should delete items', async () => {
    prismaMock.item.deleteMany.mockResolvedValue({ count: 2 })
    const res = await mockItemAPI.deleteItems(['1', '2'], mockUser.permissions)
    expect(res).toStrictEqual({ count: 2 })
  })

  it('should delete all items', async () => {
    prismaMock.item.deleteMany.mockResolvedValue({ count: 2 })
    const res = await mockItemAPI.deleteAllItems(mockUser)
    expect(res).toStrictEqual({ count: 2 })
  })

  it('should delete only purchased items', async () => {
    prismaMock.item.deleteMany.mockResolvedValue({ count: 1 })
    const res = await mockItemAPI.deletePurchasedItems(mockUser)
    expect(res).toStrictEqual({ count: 1 })
  })
})
