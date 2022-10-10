import React from 'react'
import { Pressable } from 'react-native'
import { useAuth } from '../../../../auth/use-auth'
import { Icon, IconButton, LoadingSpinner, Text } from '../../../../components'
import {
  Header as StyledHeader,
  Centered,
  HeaderTitle,
  HeaderIcon,
  Logout,
  IconSpacing,
} from './style'
import { Runner } from './assets/runner'

interface Props {
  handleDeleteItems: () => void
  isDeleteDisabled: boolean
  isDeleteLoading: boolean
  isDeleting: boolean
}

export const Header: React.FC<Props> = ({
  handleDeleteItems,
  isDeleteDisabled,
  isDeleteLoading,
  isDeleting,
}) => {
  const { logout } = useAuth()

  return (
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
          <Pressable onPress={logout}>
            <Logout>
              <IconSpacing>
                <Icon color="white" height={20} icon="logout" width={20} />
              </IconSpacing>
              <Text color="white" variant="body-copy-xsmall">
                Logout
              </Text>
            </Logout>
          </Pressable>
        )}
      </Centered>
    </StyledHeader>
  )
}
