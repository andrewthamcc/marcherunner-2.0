import { gql, StoreObject, useMutation } from '@apollo/client'
import { DeleteItem, DeleteItemVariables } from './types/DeleteItem'

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
      name
      userId
      categoryId
      purchased
    }
  }
`

interface UseDeleteItem {
  deleteItem: (id: string) => Promise<void>
  loading: boolean
}

export const useDeleteItem = (): UseDeleteItem => {
  const [deleteFunction, { loading }] = useMutation<
    DeleteItem,
    DeleteItemVariables
  >(DELETE_ITEM)

  const deleteItem = async (id: string) => {
    await deleteFunction({
      variables: {
        id,
      },
      onError: (error) => console.error(error),
      update: (cache, { data }) => {
        cache.modify({
          fields: {
            items(prev: StoreObject[], { readField }) {
              return prev.filter(
                (i) => readField('id', i) !== data?.deleteItem.id
              )
            },
          },
        })
      },
    })
  }

  return { deleteItem, loading }
}
