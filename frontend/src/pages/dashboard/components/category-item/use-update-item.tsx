import { gql, useMutation } from '@apollo/client'
import { useToast } from '../../../../components'
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
  const [updateFunction, { loading, error }] = useMutation<
    UpdateItem,
    UpdateItemVariables
  >(UPDATE_ITEM)
  const toast = useToast()

  if (error) {
    toast('Could not update item.', { variant: 'error' })
    console.error(error)
  }

  const updateItem = async (id: string) => {
    await updateFunction({
      variables: {
        id,
      },
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
