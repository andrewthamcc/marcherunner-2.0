import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors, spacing } from '../../../../theme'

export const DropdownView = styled(View)`
  background-color: ${colors.white};
  border-radius: 18px;
  border: 1px solid ${colors['light-grey']};
  margin: 0 ${spacing.xxlarge};
  padding: ${spacing.large};

  shadow-color: ${colors.black};
  shadow-radius: 5px;
  shadow-opacity: 1;
  elevation: 10;
`
