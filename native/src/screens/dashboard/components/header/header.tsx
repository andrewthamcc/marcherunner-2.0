import React from 'react'
import { IconButton, LoadingSpinner } from '../../../../components'
import {
  Header as StyledHeader,
  Centered,
  HeaderTitle,
  HeaderIcon,
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
      </Centered>
    </StyledHeader>
  )
}
