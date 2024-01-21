import styled from 'styled-components';
import AddFoodIcon from '../../../public/SVG/AddFoodIcon.svg';
import { FoodCardProps } from '../../../@types/FoodCard';
import Image from 'next/image';

const StyledFoodTitle = styled.div`
  width: 8rem;
  display: inline;
  font-size: 1.2rem;
  font-weight: 600;
  padding-left: 1.5rem;
  flex-shrink: 0;

  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledFoodContent = styled.div`
  color: #9b9b9b;
  width: 8rem;
  display: inline;
  word-break: break-all;
  padding-left: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledFoodLayout = styled.article`
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  height: 5.625rem;
  width: 17rem;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const FoodCard = ({ foodName, volume, calorie, ...rest }: FoodCardProps) => {
  return (
    <StyledFoodLayout>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StyledFoodTitle>{foodName}</StyledFoodTitle>
        <StyledFoodContent>{volume}</StyledFoodContent>
        <StyledFoodContent>{calorie}kcal</StyledFoodContent>
      </section>
      <figure>
        <Image
          src={AddFoodIcon}
          width={28}
          height={28}
          alt="음식 더하기 아이콘"
        />
      </figure>
    </StyledFoodLayout>
  );
};

export default FoodCard;
