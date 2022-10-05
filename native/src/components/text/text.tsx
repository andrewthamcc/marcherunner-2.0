import React from 'react'
import styled from 'styled-components'
import { Text as ReactNativeText, TextProps } from 'react-native'
import { colors, ColorValues, typography, TextVariant } from '../../theme'

const StyledText = styled(ReactNativeText)<Props>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-size: ${({ variant }) =>
    variant ? typography[variant].fontSize : typography['body-copy'].fontSize};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  text-decoration: ${({ strikethrough }) =>
    strikethrough ? 'line-through' : 'none'};
  text-align: ${({ align }) => (align ? align : 'left')};
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
      align={align}
      color={color}
      fontWeight={fontWeight}
      strikethrough={strikethrough}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledText>
  )
}
