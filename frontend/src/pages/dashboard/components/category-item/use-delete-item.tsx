import { gql, StoreObject, useMutation } from '@apollo/client'
import { useToast } from '../../../../components'
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
  const [deleteFunction, { loading, error }] = useMutation<
    DeleteItem,
    DeleteItemVariables
  >(DELETE_ITEM)
  const toast = useToast()

  if (error) {
    toast('Could not delete item.', { variant: 'error' })
    console.error(error)
  }

  const deleteItem = async (id: string) => {
    await deleteFunction({
      variables: {
        id,
      },
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
