import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { StoryBookWrapper } from '../../utils'
import { IconButton, IconButtonProps } from './icon-button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
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
