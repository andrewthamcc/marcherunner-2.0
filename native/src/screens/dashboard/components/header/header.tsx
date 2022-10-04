import React from 'react'
import { Header as StyledHeader, HeaderTitle, HeaderIcon } from './style'
import { Runner } from './assets/runner'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderTitle color="white">MarchéRunner</HeaderTitle>
      <HeaderIcon>
        <Runner />
      </HeaderIcon>
    </StyledHeader>
  )
}
