import useGetSearchedFootList from '@/hooks/useGetSearchedFootList';
import FoodCardList from '@/components/FoodCardList';
import { useMemo } from 'react';

const SearchedResult = ({ keyword }: { keyword: string }) => {
  const { data } = useGetSearchedFootList();
  console.log(data, keyword);

  const filteredFoodList = useMemo(() => {
    return data?.filter((food) => food.foodName.includes(keyword));
  }, [data, keyword]);

  return <>{data && <FoodCardList foodCardList={filteredFoodList ?? []} />}</>;
};

export default SearchedResult;
