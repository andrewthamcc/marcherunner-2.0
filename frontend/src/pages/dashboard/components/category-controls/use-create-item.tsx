import { gql, useMutation } from '@apollo/client'
import { useToast } from '../../../../components'
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
  const [createFunction, { loading, error }] = useMutation<
    CreateItem,
    CreateItemVariables
  >(CREATE_ITEM)
  const toast = useToast()

  if (error) {
    toast('Could not create item.', { variant: 'error' })
    console.error(error)
  }

  const createItem = async (item: Item) => {
    await createFunction({
      variables: {
        item,
      },
      update: (cache, { data }) => {
        const newItemRef = cache.writeQuery({
          query: CREATE_ITEM,
          data,
          variables: {
            item,
          },
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
