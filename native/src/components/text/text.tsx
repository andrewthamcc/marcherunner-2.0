import React from 'react'
import { Text as ReactNativeText, TextProps } from 'react-native'
import { colors, ColorValues, typography, TextVariant } from '../../theme'
import styled from 'styled-components'

const StyledText = styled(ReactNativeText)<Props>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-size: ${({ variant }) =>
    variant ? typography[variant].fontSize : typography['body-copy'].fontSize};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  text-decoration: ${({ strikethrough }) =>
    strikethrough ? 'line-through' : 'none'};
`

interface Props {
  align?: 'left' | 'right' | 'center'
  variant?: TextVariant
  color?: ColorValues
  fontWeight?: number
  strikethrough?: boolean
}

export const Text: React.FC<Props & TextProps> = ({
  align = 'left',
  children,
  color = 'black',
  variant = 'body-copy',
  fontWeight = 400,
  strikethrough = false,
  ...rest
}) => {
  return (
    <StyledText
      color={color}
      strikethrough={strikethrough}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledText>
  )
}
