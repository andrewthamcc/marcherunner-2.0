import React from 'react'
import { Text as ReactNativeText, TextProps } from 'react-native'
import styled from 'styled-components'
import { colors, ColorValues, typography, TextVariant } from '../../theme'

const StyledText = styled(ReactNativeText)<Props>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-size: ${({ variant }) =>
    variant ? typography[variant].fontSize : typography['body-copy'].fontSize};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'normal')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  text-decoration: ${({ strikethrough }) =>
    strikethrough ? 'line-through' : 'none'};
  text-align: ${({ align }) => (align ? align : 'left')};
`

interface Props {
  align?: 'left' | 'right' | 'center'
  variant?: TextVariant
  color?: ColorValues
  fontStyle?: 'normal' | 'italic'
  fontWeight?: number
  strikethrough?: boolean
}

export const Text: React.FC<Props & TextProps> = ({
  align = 'left',
  children,
  color = 'black',
  variant = 'body-copy',
  fontStyle = 'normal',
  fontWeight = 400,
  strikethrough = false,
  ...rest
}) => {
  return (
    <StyledText
      align={align}
      color={color}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      strikethrough={strikethrough}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledText>
  )
}
