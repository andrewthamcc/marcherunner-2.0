import { gql, StoreObject, useMutation } from '@apollo/client'
import { DeleteItems, DeleteItemsVariables } from './types/DeleteItems'

export const DELETE_ITEMS = gql`
  mutation DeleteItems($deleteData: [String!]!) {
    deleteItems(deleteData: $deleteData) {
      count
    }
  }
`

interface UseDeleteItem {
  deleteItems: (items: string[]) => Promise<void>
  loading: boolean
}

export const useDeleteItems = (): UseDeleteItem => {
  const [deleteFunction, { loading }] = useMutation<
    DeleteItems,
    DeleteItemsVariables
  >(DELETE_ITEMS)

  const deleteItems = async (deleteData: string[]) => {
    await deleteFunction({
      variables: {
        deleteData,
      },
      onError: (error) => console.error(error),
      update: (cache) => {
        cache.modify({
          fields: {
            items(prev: StoreObject[], { readField }) {
              return prev.filter(
                (i) => !deleteData.includes(readField('id', i) as string)
              )
            },
          },
        })
      },
    })
  }

  return { deleteItems, loading }
}
