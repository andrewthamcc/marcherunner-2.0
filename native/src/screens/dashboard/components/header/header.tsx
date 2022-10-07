import React, { useState } from 'react'
import { useApolloClient, StoreObject } from '@apollo/client'
import { Modal } from 'react-native'
import {
  Button,
  IconButton,
  LoadingSpinner,
  Text,
} from '../../../../components'
import { restClient } from '../../../../rest-client'
import {
  Header as StyledHeader,
  Centered,
  HeaderTitle,
  HeaderIcon,
  IconSpacing,
  ModalView,
  ModalControls,
} from './style'
import { Runner } from './assets/runner'

interface Props {
  handleDeleteItems: () => void
  hasItems: boolean
  hasPurchasedItems: boolean
  isDeleteDisabled: boolean
  isDeleteLoading: boolean
  isDeleting: boolean
}

type DeleteType = 'all' | 'purchased'
const DELETE_ALL = '/item/deleteAll'
const DELETE_PURCHASED = '/item/deletePurchased'

export const Header: React.FC<Props> = ({
  handleDeleteItems,
  hasItems,
  hasPurchasedItems,
  isDeleteDisabled,
  isDeleteLoading,
  isDeleting,
}) => {
  const [loading, setLoading] = useState(false)
  const [itemDeleteType, setItemDeleteType] = useState<DeleteType | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const client = useApolloClient()

  const handleDelete = async (deleteType: DeleteType) => {
    setLoading(true)
    const url = deleteType === 'all' ? DELETE_ALL : DELETE_PURCHASED

    try {
      await restClient(url, 'POST')

      client.cache.modify({
        fields: {
          items(prev: StoreObject[], { readField }) {
            if (deleteType === 'all') return []
            return prev.filter((i) => !readField('purchased', i))
          },
        },
      })

      setShowDeleteModal(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <StyledHeader>
        <Centered>
          <HeaderTitle color="white">MarchéRunner</HeaderTitle>
          <HeaderIcon>
            <Runner />
          </HeaderIcon>
        </Centered>
        <Centered>
          {isDeleting ? (
            <IconButton
              color={isDeleteDisabled ? 'light-grey' : 'white'}
              disabled={isDeleteDisabled || isDeleteLoading}
              height={30}
              icon="trash"
              onPress={handleDeleteItems}
              width={30}
            />
          ) : (
            isDeleteLoading && <LoadingSpinner />
          )}
          {!isDeleting && (
            <>
              <IconButton
                accessibilityLabel="delete purchased items"
                color={hasPurchasedItems ? 'white' : 'light-grey'}
                disabled={!hasPurchasedItems}
                height={35}
                icon="checkout cart"
                onPress={() => {
                  setItemDeleteType('purchased')
                  setShowDeleteModal(true)
                }}
                width={35}
              />
              <IconSpacing>
                <IconButton
                  accessibilityLabel="delete all items"
                  color={hasItems ? 'red' : 'light-grey'}
                  disabled={!hasItems}
                  height={35}
                  icon="clear cart"
                  onPress={() => {
                    setItemDeleteType('all')
                    setShowDeleteModal(true)
                  }}
                  width={35}
                />
              </IconSpacing>
            </>
          )}
        </Centered>
      </StyledHeader>

      <Modal
        onRequestClose={() => {
          setItemDeleteType(null)
          setShowDeleteModal(false)
        }}
        transparent={true}
        visible={showDeleteModal}
      >
        <ModalView>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Text align="center">{`Delete ${itemDeleteType?.toUpperCase()} items?`}</Text>
          )}
          <ModalControls>
            <Button
              color="orange"
              label="Cancel"
              onPress={() => {
                setItemDeleteType(null)
                setShowDeleteModal(false)
              }}
            />
            <Button
              color="green"
              label="Confirm"
              onPress={() => {
                if (!itemDeleteType) return
                handleDelete(itemDeleteType)
              }}
            />
          </ModalControls>
        </ModalView>
      </Modal>
    </>
  )
}
