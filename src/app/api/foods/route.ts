import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import searchList from '../../../../mock/searchListdb.json';

export async function GET(_req: NextRequest) {
  return NextResponse.json(searchList.foodList, {
    status: 200,
  });
}
