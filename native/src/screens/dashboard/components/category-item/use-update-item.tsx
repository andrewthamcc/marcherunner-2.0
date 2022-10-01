import { gql, useMutation } from '@apollo/client'
import { UpdateItem, UpdateItemVariables } from './types/UpdateItem'

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!) {
    updateItem(id: $id) {
      id
      name
      userId
      categoryId
      purchased
    }
  }
`

interface UseUpdateItem {
  updateItem: (id: string) => Promise<void>
  loading: boolean
}

export const useUpdateItem = (): UseUpdateItem => {
  const [updateFunction, { loading }] = useMutation<
    UpdateItem,
    UpdateItemVariables
  >(UPDATE_ITEM)
  const updateItem = async (id: string) => {
    await updateFunction({
      variables: {
        id,
      },
      onError: (error) => console.error(error),
      update: (cache, { data }) => {
        cache.modify({
          id: `item:${id}`,
          fields: {
            purchased() {
              return data?.updateItem.purchased
            },
          },
        })
      },
    })
  }

  return { updateItem, loading }
}
