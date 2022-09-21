import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryBookWrapper } from '../../utils'
import { Text, TextProps, TEXT_VARIANTS, COLOR_VARIANTS } from './text'

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children: 'Text Component',
  },
} as Meta

const Template: Story<TextProps> = (args) => (
  <StoryBookWrapper>
    <Text {...args} />
  </StoryBookWrapper>
)

export const Basic = Template.bind({})

export const Left = Template.bind({})
Left.args = {
  align: 'left',
}

export const Center = Template.bind({})
Center.args = {
  align: 'center',
}

export const Right = Template.bind({})
Right.args = {
  align: 'right',
}

export const Sizes = () => {
  return TEXT_VARIANTS.map((t, index) => (
    <Text key={index} variant={t}>
      {t}
    </Text>
  ))
}

export const Colors = () => {
  return COLOR_VARIANTS.map((c, index) => (
    <Text color={c} key={index}>
      {c}
    </Text>
  ))
}
