import React from 'react'
import { TextInput as ReactNativeTextInput, TextInputProps } from 'react-native'
import { colors } from '../../theme'
import styled from 'styled-components'

const StyledTextInput = styled(ReactNativeTextInput)<Props>`
  margin: 1rem 0;
  padding: 8px 16px;
  display: block;
  border: 2px solid;
  border-color: ${({ error }) => (error ? colors.red : '#c0c0c0')};
  border-radius: 8px;
  transition: border 0.2s ease-in, box-shadow 0.2s ease-in;
  width: 100%;

  &:focus {
    border-color: ${colors.green};
  }
`

interface Props {
  error: boolean
}

export const TextInput: React.FC<Props & TextInputProps> = ({
  error,
  ...rest
}) => {
  return <StyledTextInput error={error} {...rest} />
}
