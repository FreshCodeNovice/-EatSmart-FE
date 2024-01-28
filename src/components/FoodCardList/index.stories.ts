import type { Meta, StoryObj } from '@storybook/react';
import FoodCardList from './index';
const meta = {
  title: '식품 카드 리스트 컴포넌트,',
  component: FoodCardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FoodCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseFoodCardList:Story = {
        args:{
            foodCardList:[{
                foodName:'단무지단무지단무지단무지단무지단무지단무지',
                calorie:500,
                volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
            },{
                foodName:'단무지단무지단무지단무지단무지단무지단무지',
                calorie:500,
                volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
            },{
                foodName:'단무지단무지단무지단무지단무지단무지단무지',
                calorie:500,
                volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
            },{
                foodName:'단무지단무지단무지단무지단무지단무지단무지',
                calorie:500,
                volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
            },{
                foodName:'단무지단무지단무지단무지단무지단무지단무지',
                calorie:500,
                volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
            }]
        }
}


export const BaseFoodCardListWithCenter:Story = {
    args:{
        layout:'center',
        foodCardList:[{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        }]
    }
}



export const BaseFoodCardListWithRight:Story = {
    args:{
        layout:'right',
        foodCardList:[{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        },{
            foodName:'단무지단무지단무지단무지단무지단무지단무지',
            calorie:500,
            volume:'1소접시 (60g)1소접시 (60g)1소접시 (60g)1소접시 (60g)'
        }]
    }
}
