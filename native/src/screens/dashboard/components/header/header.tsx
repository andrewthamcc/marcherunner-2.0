import React from 'react'
import { IconButton, LoadingSpinner } from '../../../../components'
import {
  Header as StyledHeader,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderIcon,
  DeleteContainer,
  CloseIcon,
} from './style'
import { Runner } from './assets/runner'

interface Props {
  closeDelete: () => void
  handleDeleteItems: () => void
  isDeleteDisabled: boolean
  isDeleteLoading: boolean
  isDeleting: boolean
}

export const Header: React.FC<Props> = ({
  closeDelete,
  handleDeleteItems,
  isDeleteDisabled,
  isDeleteLoading,
  isDeleting,
}) => {
  return (
    <StyledHeader>
      <HeaderTitleContainer>
        <HeaderTitle color="white">MarchéRunner</HeaderTitle>
        <HeaderIcon>
          <Runner />
        </HeaderIcon>
      </HeaderTitleContainer>
      {isDeleting ? (
        <DeleteContainer>
          <IconButton
            color={isDeleteDisabled ? 'light-grey' : 'white'}
            disabled={isDeleteDisabled || isDeleteLoading}
            height={30}
            icon="trash"
            onPress={handleDeleteItems}
            width={30}
          />
          <CloseIcon>
            <IconButton
              color="white"
              height={30}
              icon="close"
              onPress={closeDelete}
              width={30}
            />
          </CloseIcon>
        </DeleteContainer>
      ) : (
        <LoadingSpinner />
      )}
    </StyledHeader>
  )
}
