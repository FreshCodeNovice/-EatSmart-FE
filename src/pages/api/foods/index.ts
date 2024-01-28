import { NextApiRequest, NextApiResponse } from 'next';
import * as searchList from '../../../../mock/searchListdb.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(searchList.foodList);
}
