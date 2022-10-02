import React, { useState } from 'react'
import { TextInput as ReactNativeTextInput, TextInputProps } from 'react-native'
import styled from 'styled-components'
import { colors } from '../../theme'

const StyledTextInput = styled(ReactNativeTextInput)<StyledProps>`
  padding: 2px 8px;
  border: 2px solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 8px;
`

interface StyledProps extends Props {
  borderColor: string
}

interface Props {
  error?: boolean
}

export const TextInput: React.FC<Props & TextInputProps> = ({
  error = false,
  onBlur,
  onFocus,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)

  let borderColor = colors['light-grey']
  if (error) borderColor = colors.red
  if (isFocused) borderColor = colors.green

  return (
    <StyledTextInput
      borderColor={borderColor}
      onBlur={(e) => {
        setIsFocused(false)

        if (onBlur) onBlur(e)
      }}
      onFocus={(e) => {
        setIsFocused(true)

        if (onFocus) onFocus(e)
      }}
      {...rest}
    />
  )
}
