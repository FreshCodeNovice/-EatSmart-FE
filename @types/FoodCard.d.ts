import { ComponentPropsWithoutRef } from 'react';

/**
 * @foodName : 음식 이름
 * @calorie : 칼로리
 * @volume : 접시당 몇 그램인지?
 */

export interface FoodCardProps extends ComponentPropsWithoutRef<'div'> {
  foodName: string;
  calorie: number;
  volume: string;
}
