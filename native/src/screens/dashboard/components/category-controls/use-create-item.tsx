import { gql, useMutation } from '@apollo/client'
import { CreateItem, CreateItemVariables } from './types/CreateItem'

export const CREATE_ITEM = gql`
  mutation CreateItem($item: CreateItemData!) {
    createItem(item: $item) {
      id
      name
      userId
      categoryId
      purchased
    }
  }
`

interface Item {
  name: string
  categoryId: string
}

interface UseCreateItem {
  createItem: (item: Item) => Promise<void>
  loading: boolean
}

export const useCreateItem = (): UseCreateItem => {
  const [createFunction, { loading }] = useMutation<
    CreateItem,
    CreateItemVariables
  >(CREATE_ITEM)

  const createItem = async (item: Item) => {
    await createFunction({
      variables: {
        item,
      },
      onError: (error) => console.error(error),
      update: (cache, { data }) => {
        const newItemRef = cache.writeQuery({
          data: data?.createItem,
          query: CREATE_ITEM,
        })

        cache.modify({
          fields: {
            items(prev) {
              return [...prev, newItemRef]
            },
          },
        })
      },
    })
  }

  return { createItem, loading }
}
