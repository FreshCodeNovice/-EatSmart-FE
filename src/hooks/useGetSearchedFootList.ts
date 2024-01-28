import { useQuery } from '@tanstack/react-query';
import { FoodCardProps } from '../../@types/FoodCard';
const getUserSearchedFood = async () => {
  return (await fetch('/api/foods')).json() as Promise<FoodCardProps[]>;
};

/*
검색 결과가 자주 바뀌는지에 따라 다르게 staleTime,GCTime 조절 필요!
*/

const useGetSearchedFootList = () => {
  return useQuery({
    queryKey: ['getSearchedFood'],
    queryFn: getUserSearchedFood,
  });
};

export default useGetSearchedFootList;
