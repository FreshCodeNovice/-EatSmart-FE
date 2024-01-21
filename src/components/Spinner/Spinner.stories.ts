import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './index'
const meta = {
  title: '스피너 컴포넌트',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseSpinner:Story = {

}