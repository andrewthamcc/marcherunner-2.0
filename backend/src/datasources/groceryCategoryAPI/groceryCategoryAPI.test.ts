import { prismaMock } from '../../tests/singleton'
import { GroceryCategoryAPI } from './groceryCategoryAPI'

const mockGroceryCategoryAPI = new GroceryCategoryAPI(prismaMock)

describe('Grocery Category API', () => {
  it('returns the grocery categories', async () => {
    const categories = [
      {
        id: '1',
        categoryName: 'category 1',
      },
      {
        id: '2',
        categoryName: 'category 2',
      },
    ]

    prismaMock.groceryCategory.findMany.mockResolvedValue(categories)

    const res = await mockGroceryCategoryAPI.getCategories()
    expect(res).toStrictEqual(categories)
  })
})
