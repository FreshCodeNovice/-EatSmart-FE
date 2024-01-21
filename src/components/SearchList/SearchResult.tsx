import useGetSearchedFootList from '@/hooks/useGetSearchedFootList';
import FoodCardList from '@/components/FoodCardList';
import { useMemo } from 'react';

const SearchedResult = ({ keyword }: { keyword: string }) => {
  const { data } = useGetSearchedFootList();
  

  const filteredFoodList = useMemo(() => {
    return data?.filter((food) => food.foodName.includes(keyword));
  }, [data, keyword]);

  return (
    <>
      {data && (
        <FoodCardList layout="center" foodCardList={filteredFoodList ?? []} />
      )}
    </>
  );
};

export default SearchedResult;
