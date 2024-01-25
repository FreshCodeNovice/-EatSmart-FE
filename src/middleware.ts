import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/users/login/:path*'],
};

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.includes('/users/login')) {
    //토큰 추출

    const nextURL = new URL(request.nextUrl);
    const accessToken = nextURL.search.split('=')[1];

    if (accessToken) {
      const response = NextResponse.redirect(new URL('http://localhost:3000/'));
      const oneDay = 24 * 60 * 60 * 1000;
      response.cookies.set('accessToken', accessToken, {
        sameSite: true,
        maxAge: oneDay,
        expires: oneDay,
      });

      return response;
    }
  }
};
