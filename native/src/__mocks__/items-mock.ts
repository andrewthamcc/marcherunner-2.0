import { BAKERY_ID, USER_ID } from './constants'

export const itemsMock = [
  {
    __typename: 'Item',
    id: 'f2ad18d3-1e78-47fb-9fe2-75cb6ecafc3e',
    name: 'cookies',
    userId: USER_ID,
    categoryId: BAKERY_ID,
    purchased: false,
  },
  {
    __typename: 'Item',
    id: '61bd3210-1785-41cb-9292-1c348c2bd60f',
    name: 'english muffins',
    userId: USER_ID,
    categoryId: BAKERY_ID,
    purchased: false,
  },
]
