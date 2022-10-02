import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import {
  Dashboard_groceryCategories,
  Dashboard_items,
} from '../../types/Dashboard'
import { Text } from '../../../../components'
import { CategoryControls, CategoryItem } from '..'
import { colors } from '../../../../theme'

interface Props {
  category: Dashboard_groceryCategories
  items: Dashboard_items[]
}

const CategoryListContainer = styled(View)`
  margin: 24px 0;
`

const HR = styled(View)`
  border: 0.75px solid ${colors['light-grey']};
  margin: 8px 0;
`

export const CategoryList: React.FC<Props> = ({ category, items }) => {
  return (
    <CategoryListContainer>
      <CategoryControls category={category} />
      <HR />
      {!items.length ? (
        <Text>Nothing here...</Text>
      ) : (
        items.map((i) => <CategoryItem item={i} key={i.id} />)
      )}
    </CategoryListContainer>
  )
}
