import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { colors, ColorValues, typography } from '../../theme'
import styled from 'styled-components/native'

const StyledButton = styled(TouchableOpacity)<Props>`
  background: ${({ color }) => (color ? colors[color] : colors.green)};
  border: 2px solid #c0c0c0;
  border-radius: 40px;
  font-size: 1.6rem;
  padding: 8px 16px;
  width: 120px;
`

const StyledButtonText = styled(Text)`
  font-size: ${typography['body-copy'].fontSize};
  text-align: center;
  color: #ffffff;
`

interface Props {
  color?: ColorValues
  disabled?: boolean
}

export const Button: React.FC<Props & TouchableOpacityProps> = ({
  color = 'green',
  disabled = false,
  ...rest
}) => {
  const buttonColor = disabled ? 'light-grey' : color

  return (
    <StyledButton color={buttonColor} disabled={disabled} {...rest}>
      <StyledButtonText>Button</StyledButtonText>
    </StyledButton>
  )
}
