
import type { Meta, StoryObj } from '@storybook/react';
import TabGroup from './TabGroup';
const meta = {
  title: 'Tab 컴포넌트',
  component: TabGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseTabs:Story = {
    
}
