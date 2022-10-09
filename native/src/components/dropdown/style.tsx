import { Pressable, View, PressableProps } from 'react-native'
import styled from 'styled-components/native'

interface StyledProps extends PressableProps {
  borderColor: string
}

export const DropButton = styled(Pressable)<StyledProps>`
  padding: 2px 8px;
  border: 2px solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 8px;
  flex: 1;
`

export const Item = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CaretIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
