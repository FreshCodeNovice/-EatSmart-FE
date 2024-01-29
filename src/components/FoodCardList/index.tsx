import FoodCard from '../FoodCard';
import { FoodCardProps } from '../../../@types/FoodCard';
import styled from 'styled-components';

const FoodCardListLayout = styled.div<{ layout?: 'center' | 'right' | 'left' }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${(props) =>
    props.layout === 'center'
      ? 'center'
      : props.layout === 'right'
      ? 'flex-end'
      : 'flex-start'};
`;

const FoodCardList = ({
  foodCardList,
  layout,
}: {
  foodCardList: FoodCardProps[];
  layout?: 'center' | 'left' | 'right';
}) => {
  return (
    <FoodCardListLayout layout={layout}>
      {foodCardList.map((foodCard) => (
        <FoodCard {...foodCard} key={foodCard.foodName} />
      ))}
    </FoodCardListLayout>
  );
};

export default FoodCardList;
