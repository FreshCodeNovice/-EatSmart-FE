import type { Meta, StoryObj } from '@storybook/react';
import FoodCard from './index';
const meta = {
  title: '식품 카드 컴포넌트,',
  component: FoodCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FoodCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseFoodCard:Story = {
        args:{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        }
}
