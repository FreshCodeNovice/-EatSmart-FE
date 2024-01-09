import type { Meta, StoryObj } from '@storybook/react';
import SearchList from './index'
const meta = {
  title: '식품 검색 레이아웃',
  component: SearchList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseSearchList:Story = {

}