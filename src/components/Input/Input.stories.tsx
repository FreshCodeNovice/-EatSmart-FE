import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';
import Search from '../../../public/SVG/Search.svg'
import Input from './index';
const meta = {
  title: 'Input 컴포넌트',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseInput:Story = {
    
}

export const SearchInput:Story = {
    args:{
        imgIcon:<Image src = {Search} alt = "검색 이미지"  />
    }
}