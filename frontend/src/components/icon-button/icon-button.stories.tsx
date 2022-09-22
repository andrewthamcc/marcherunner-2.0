import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoryBookWrapper } from '../../utils'
import { IconButton, IconButtonProps } from './icon-button'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
    a11ylabel: 'storybook buton',
    label: 'Icon Button',
    onClick: action('clicked'),
  },
} as Meta

const Template: Story<IconButtonProps> = (args) => (
  <StoryBookWrapper>
    <IconButton {...args} />
  </StoryBookWrapper>
)

export const Icon = Template.bind({})
Icon.args = {
  icon: 'close',
}
